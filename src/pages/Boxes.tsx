import React from "react";
import { Box, useGetBoxesQuery } from "../generated/graphql";
import Layout from "../components/Layout";
import BoxCard from "../components/BoxCard";
import { useBoxStore } from "../store/BoxStore";
import BoxSearchBox from "../components/BoxSearchBar";
import NewBoxModal from "../components/modals/NewBoxModal";
import { useNavigate } from "react-router-dom";

type BoxesProps = {};

const Boxes: React.FC<BoxesProps> = () => {
  const nav = useNavigate();
  const { setBoxes, filteredBoxes } = useBoxStore();
  const { loading, error } = useGetBoxesQuery({
    onCompleted: (data) => {
      setBoxes(data.me!.boxes as Box[]);
    },
  });

  if (loading) {
    return (
      <Layout>
        <div className="animate-pulse items-center justify-center">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    nav("/");
  }

  return (
    <Layout>
      <div className="flex gap-2">
        <BoxSearchBox />
        <NewBoxModal />
      </div>
      <div className="mt-5 flex w-full max-w-6xl flex-col items-center gap-2 pb-10">
        <div className="flex w-11/12 justify-end"></div>
        {filteredBoxes &&
          filteredBoxes.map((box) => (
            <BoxCard key={box!.id} box={box as Box} />
          ))}
      </div>
    </Layout>
  );
};
export default Boxes;
