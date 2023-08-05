import { create } from "zustand";
import { Item } from "../generated/graphql";

interface ItemsState {
  items: Item[];
  filteredItems: Item[];
  filter: (by: string) => void;
  setItems: (items: Item[]) => void;
}

export const useItemsStore = create<ItemsState>()((set) => ({
  items: [],
  filteredItems: [],
  filter: (by) => {
    if (by === "") {
      set((state) => ({ filteredItems: state.items }));
      return;
    }
    set((state) => ({
      filteredItems: state.items.filter(
        (item) =>
          item.name.toLowerCase().includes(by.toLowerCase()) ||
          item.box?.name.toLowerCase().includes(by.toLowerCase()),
      ),
    }));
  },
  setItems: (items) => {
    set(() => ({
      items,
      filteredItems: items,
    }));
  },
}));
