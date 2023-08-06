import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
  Box,
  useDeleteBoxMutation,
  useUpdateBoxMutation,
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
import { DialogClose } from "@radix-ui/react-dialog";

type EditBoxModalProps = {
  box: Box;
};

const formSchema = z.object({
  name: z.string().min(3, { message: "Must be at least 3 characters long" }),
  description: z.string().optional(),
});

const EditBoxModal: React.FC<EditBoxModalProps> = ({ box }) => {
  const [updateBox] = useUpdateBoxMutation();
  const [deleteBox] = useDeleteBoxMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: box.name,
      description: box.description || "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    updateBox({
      variables: {
        box: {
          id: box.id,
          name: data.name,
          description: data.description,
        },
      },
      onCompleted: () => {
        window.location.reload();
      },
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Edit Box</Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-scroll sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit box</DialogTitle>
          <DialogDescription>
            Rename your box or change its description.
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
                  <FormDescription>
                    Name of box, useful for quick overview of what's inside
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="box description" {...field} />
                  </FormControl>
                  <FormDescription>
                    Optional. A more detailed description of what's inside.
                    Makes searching easier.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogClose asChild>
              <Button type="submit">Save</Button>
            </DialogClose>
          </form>
        </Form>
        <DialogFooter>
          {/* <Button type="submit">Save changes</Button> */}
          <div className="flex">
            <Button
              variant={"destructive"}
              onClick={() => {
                deleteBox({
                  variables: {
                    deleteBoxId: box.id,
                  },
                  onCompleted: () => {
                    window.location.reload();
                  },
                });
              }}
            >
              Delete box
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default EditBoxModal;
