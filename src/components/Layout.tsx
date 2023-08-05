import { useUser } from "@clerk/clerk-react";
import React from "react";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded || !isSignedIn) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center">
      {user && <Header userimage={user.profileImageUrl} />}
      {children}
    </div>
  );
};
export default Layout;
