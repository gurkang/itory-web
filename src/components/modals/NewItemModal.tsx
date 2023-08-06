import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import NewItemForm from "../forms/NewItemForm";

type NewItemModalProps = {
  boxId?: string;
};

const NewItemModal: React.FC<NewItemModalProps> = ({ boxId }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Add Item</Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-scroll sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Item</DialogTitle>
          <DialogDescription>
            Add a new item to your inventory
          </DialogDescription>
        </DialogHeader>
        <NewItemForm boxId={boxId} />
      </DialogContent>
    </Dialog>
  );
};
export default NewItemModal;
