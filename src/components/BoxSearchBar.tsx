import React from "react";
import { Input } from "./ui/input";
import { useBoxStore } from "../store/BoxStore";

type BoxSearchBoxProps = {};

const BoxSearchBox: React.FC<BoxSearchBoxProps> = () => {
  const { filter } = useBoxStore();
  return (
    <div className="w-72">
      <Input
        type="text"
        placeholder="Search Item"
        onChange={(e) => filter(e.target.value)}
      />
    </div>
  );
};
export default BoxSearchBox;
