import React from "react";
import { Input } from "./ui/input";
import { useItemsStore } from "../store/itemStore";

type ItemSearchBarProps = {};

const ItemSearchBar: React.FC<ItemSearchBarProps> = () => {
  const { filter } = useItemsStore();
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
export default ItemSearchBar;
