import { create } from "zustand";
import { Box } from "../generated/graphql";

interface BoxState {
  boxes: Box[];
  filteredBoxes: Box[];
  filter: (by: string) => void;
  setBoxes: (boxes: Box[]) => void;
}
export const useBoxStore = create<BoxState>()((set) => ({
  boxes: [],
  filteredBoxes: [],
  filter: (by) => {
    if (by === "") {
      set((state) => ({ filteredBoxes: state.boxes }));
      return;
    }
    set((state) => ({
      filteredBoxes: state.boxes.filter(
        (box) =>
          box.name.toLowerCase().includes(by.toLowerCase()) ||
          box.description?.toLowerCase().includes(by.toLowerCase()) ||
          box.items?.some(
            (item) => item?.name.toLowerCase().includes(by.toLowerCase()),
          ),
      ),
    }));
  },
  setBoxes: (boxes) => {
    set(() => ({
      boxes,
      filteredBoxes: boxes,
    }));
  },
}));
