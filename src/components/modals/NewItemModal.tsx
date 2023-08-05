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

type NewItemModalProps = {};

const NewItemModal: React.FC<NewItemModalProps> = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Add Item</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Item</DialogTitle>
          <DialogDescription>
            Add a new item to your inventory
          </DialogDescription>
        </DialogHeader>
        <NewItemForm />
      </DialogContent>
    </Dialog>
  );
};
export default NewItemModal;
