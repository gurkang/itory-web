import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { useRegisterMutation } from "../../generated/graphql";
import { useNavigate } from "react-router-dom";
import { Toaster } from "../ui/toaster";

type SignupFormProps = {};

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  passwordTwo: z.string(),
});

const SignupForm: React.FC<SignupFormProps> = () => {
  const [register] = useRegisterMutation();
  const nav = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordTwo: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    register({
      variables: {
        user: {
          email: data.email,
          password: data.password,
        },
      },
      onError: (error) => {
        console.log(error);
      },
      onCompleted: async (data) => {
        localStorage.setItem("token", data.register!.token);
        nav("/boxes");
      },
    });
  };
  return (
    <Form {...form}>
      <Toaster />
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" type="email" {...field} />
              </FormControl>
              <FormDescription>Email</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" type="password" {...field} />
              </FormControl>
              <FormDescription>Password</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordTwo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" type="password" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your password again
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Register</Button>
      </form>
    </Form>
  );
};
export default SignupForm;
