import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useCreateItemMutation,
  useGetBoxesQuery,
} from "../../generated/graphql";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";

type NewItemFormProps = {};

const formSchema = z.object({
  name: z.string().min(1, { message: "Must be at least 1 characters long" }),
  quantity: z.coerce.number(),
  boxId: z.string().optional().nullable(),
});

const NewItemForm: React.FC<NewItemFormProps> = () => {
  const [newItem] = useCreateItemMutation();
  const [value, setValue] = React.useState("");
  const { data, loading } = useGetBoxesQuery();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      quantity: 1,
      boxId: undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    newItem({
      variables: {
        item: {
          name: data.name,
          quantity: data.quantity,
          boxId: data.boxId,
        },
      },
      onCompleted: () => {
        window.location.reload();
      },
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
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
                <Input placeholder="item quantity" {...field} />
              </FormControl>
              <FormDescription>Quantity</FormDescription>
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
                Item box (leave empty to add to no box)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add</Button>
      </form>
    </Form>
  );
};
export default NewItemForm;
