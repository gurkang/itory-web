import React from "react";
import Layout from "../components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Box, useGetSpecificBoxQuery } from "../generated/graphql";
import EditBoxModal from "../components/EditBoxModal";

type BoxDetailsProps = {};

const BoxDetails: React.FC<BoxDetailsProps> = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const { data, loading, error } = useGetSpecificBoxQuery({
    variables: {
      boxId: id,
    },
    errorPolicy: "all",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Layout>
      <div className="mt-10  flex w-10/12 rounded-md bg-white p-2">
        <div className="flex w-full items-center gap-4 p-2">
          {data && data.me && (
            <>
              <div className="flex flex-col">
                <h1 className="text-lg text-gray-700">
                  {data.me.boxes![0]!.name}
                </h1>
                <p className="text-sm text-gray-500">
                  {data.me.boxes![0]!.description}
                </p>
                <p className="text-sm text-gray-500">
                  {data.me?.boxes![0]?.items?.length}
                </p>
              </div>
            </>
          )}
        </div>
        <div className="flex w-full items-end justify-end">
          <EditBoxModal box={data?.me?.boxes![0] as Box} />
        </div>
      </div>

      <div className="flex w-10/12 items-start justify-start">
        <Button className="my-4 bg-gray-500 " onClick={() => nav(-1)}>
          Back
        </Button>
      </div>
    </Layout>
  );
};
export default BoxDetails;
