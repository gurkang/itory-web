import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { useAuthQuery } from "../generated/graphql";

type HeaderProps = {
  userimage?: string;
};

const Header: React.FC<HeaderProps> = ({ userimage }) => {
  const nav = useNavigate();
  const { data, error, loading } = useAuthQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    // console.log(error);
  }

  if (!data?.auth) {
    return (
      <div className="flex h-20 w-full max-w-6xl flex-row items-center justify-around place-self-center border-b-2 border-b-gray-300 py-5">
        <Link to={"/"} className="cursor-pointer text-2xl font-bold">
          iTory
        </Link>
        <Link to={"/login"}>
          <Button variant={"link"}>Login</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex h-20 w-full max-w-6xl flex-row items-center justify-around place-self-center border-b-2 border-b-gray-300 py-5">
      <Link to={"/"} className="cursor-pointer text-2xl font-bold">
        iTory
      </Link>
      <Link to={"/boxes"}>
        <Button variant={"link"}>Boxes</Button>
      </Link>
      <Link to={"/items"}>
        <Button variant={"link"}>Items</Button>
      </Link>
      <div className="flex gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={userimage} />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <Link to={"/profile"}>Profile</Link>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to={"/dashboard"}>Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
              >
                Sign Out
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
export default Header;
