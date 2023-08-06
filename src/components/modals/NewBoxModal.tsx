import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateBoxMutation } from "../../generated/graphql";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";

type NewBoxModalProps = {};

const formSchema = z.object({
  name: z.string().min(1, { message: "Must be at least 1 characters long" }),
  description: z.string().optional(),
});

const NewBoxModal: React.FC<NewBoxModalProps> = ({}) => {
  const [createBox] = useCreateBoxMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    createBox({
      variables: {
        name: data.name,
        description: data.description,
      },
      onCompleted: () => {
        window.location.reload();
      },
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Box</Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-scroll sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Box</DialogTitle>
          <DialogDescription>
            Register a new box to store your items in.
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
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="box description" {...field} />
                  </FormControl>
                  <FormDescription>Describe the box here.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Add</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default NewBoxModal;
