import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import LoginForm from "../components/forms/LoginForm";
import SignupForm from "../components/forms/SignupForm";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col rounded-md p-4 shadow-md">
        <Tabs defaultValue="Login">
          <TabsList>
            <TabsTrigger value="Login">Login</TabsTrigger>
            <TabsTrigger value="Signup">Signup</TabsTrigger>
          </TabsList>
          <TabsContent value="Login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="Signup">
            <SignupForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default Login;
