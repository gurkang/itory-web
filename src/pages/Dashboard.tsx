import { useUser } from "@clerk/clerk-react";
import React from "react";
import Header from "../components/Header";

type DashboardProps = {
  name?: string;
  age?: number;
};

const Dashboard: React.FC<DashboardProps> = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded || !isSignedIn) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen w-screen flex-col bg-gradient-to-b from-gray-200 to-gray-100">
      {user && <Header userimage={user.profileImageUrl} />}
    </div>
  );
};
export default Dashboard;
