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
import { useLoginMutation } from "../../generated/graphql";
import { useNavigate } from "react-router-dom";

type LoginFormProps = {};

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(4, { message: "Must be at least 8 characters long" }),
});

const LoginForm: React.FC<LoginFormProps> = () => {
  const nav = useNavigate();

  const [loginMutation] = useLoginMutation();
  const [errors, setErrors] = React.useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    loginMutation({
      variables: {
        email: data.email,
        password: data.password,
      },
      onError: (error) => {
        setErrors(error.graphQLErrors[0].message.split(","));
        console.log(error);
      },
      onCompleted: (data) => {
        setErrors([]);
        localStorage.setItem("token", data.login!.token);
        localStorage.setItem("username", data.login!.username);
        nav("/boxes");
      },
    });
  };
  return (
    <Form {...form}>
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
              <FormLabel>Confirm</FormLabel>
              <FormControl>
                <Input placeholder="password" type="password" {...field} />
              </FormControl>
              <FormDescription>Password</FormDescription>
              <FormMessage />
              {errors.map((error) => (
                <p className="text-red-500">{error}</p>
              ))}
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit">Login</Button>
        </div>
      </form>
    </Form>
  );
};
export default LoginForm;
