import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Item,
  useGetBoxesQuery,
  useUpdateItemMutation,
} from "../generated/graphql";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

type EditBoxModalProps = {
  item: Item;
  boxId?: string;
};

const formSchema = z.object({
  name: z.string().min(3, { message: "Must be at least 3 characters long" }),
  quantity: z.coerce.number(),
  boxId: z.string().optional().nullable(),
});

const EditBoxModal: React.FC<EditBoxModalProps> = ({ item, boxId }) => {
  const [value, setValue] = React.useState("");
  const { data, loading } = useGetBoxesQuery();

  const [updateBox] = useUpdateItemMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: item.name,
      quantity: item.quantity,
      boxId: item.box?.id || undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    updateBox({
      variables: {
        updateItemItem: {
          id: item.id,
          name: data.name,
          quantity: data.quantity,
          boxId: data.boxId,
        },
      },
      onCompleted: (data) => {
        console.log(data);
        window.location.reload();
      },
    });
  };

  useEffect(() => {
    console.log("boxId", boxId);
    if (boxId) {
      form.setValue("boxId", boxId);
      setValue(
        data?.me?.boxes?.find((box) => box?.id === boxId)?.name || "No box",
      );
    } else {
      setValue(item.box?.name || "No box");
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-scroll py-20 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Item</DialogTitle>
          <DialogDescription>
            Edit the item <strong>{item.name}</strong>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} />
                  </FormControl>
                  <FormDescription>Item name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input placeholder="box description" {...field} />
                  </FormControl>
                  <FormDescription>Item quantity</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="boxId"
              render={({}) => (
                <FormItem>
                  <FormLabel>Box</FormLabel>
                  <FormControl>
                    <Command>
                      <Input disabled value={value} />
                      <CommandInput placeholder="Search for a box.." />
                      <CommandList>
                        <CommandEmpty>No boxes found.</CommandEmpty>
                        <CommandGroup heading="Boxes">
                          {data?.me?.boxes?.map((box) => (
                            <CommandItem
                              key={box?.id}
                              onSelect={(currentValue) => {
                                form.setValue("boxId", box!.id);
                                setValue(currentValue);
                              }}
                            >
                              {box!.name}
                            </CommandItem>
                          ))}
                          <CommandItem
                            onSelect={(currentValue) => {
                              form.setValue("boxId", null);
                              setValue(currentValue);
                            }}
                          >
                            No box
                          </CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </FormControl>
                  <FormDescription>
                    Which box is the item stored in?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Save</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default EditBoxModal;
