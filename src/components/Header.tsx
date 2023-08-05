import { SignOutButton } from "@clerk/clerk-react";
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

type HeaderProps = {
  userimage?: string;
};

const Header: React.FC<HeaderProps> = ({ userimage }) => {
  const nav = useNavigate();

  return (
    <div className="flex h-20 w-full max-w-6xl flex-row items-center justify-around place-self-center border-b-2 border-b-gray-300 py-5">
      <div className="cursor-pointer text-2xl font-bold text-green-500">
        iTory
      </div>
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
              <SignOutButton>
                <button
                  onClick={() => {
                    nav("/");
                  }}
                >
                  Sign Out
                </button>
              </SignOutButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
export default Header;
