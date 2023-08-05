import React from "react";
import { Item } from "../generated/graphql";
import { Link } from "react-router-dom";
import EditItemModal from "./EditItemModal";

type ItemCardProps = {
  item: Item;
};

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className="flex w-11/12 flex-col rounded-md bg-white p-2">
      <div className="flex">
        <h1 className="text-lg text-gray-700">{item.name}</h1>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-sm text-gray-500">{item.quantity}</p>
          <p className=" text-sm text-gray-500">{item.box?.name || "no box"}</p>
        </div>
        <Link
          className="cursor-pointer place-self-end text-sm text-gray-500 hover:opacity-50"
          to={`/item/${item.id}`}
        >
          Details
        </Link>
        <EditItemModal item={item} />
      </div>
    </div>
  );
};
export default ItemCard;
