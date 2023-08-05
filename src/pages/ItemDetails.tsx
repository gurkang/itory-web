import React from "react";
import { Item, useGetSpecificItemQuery } from "../generated/graphql";
import { Link, useParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import Layout from "../components/Layout";

type ItemDetailsProps = {
  item?: Item;
};

const ItemDetails: React.FC<ItemDetailsProps> = () => {
  const { id } = useParams();
  const { data, loading, error } = useGetSpecificItemQuery({
    variables: {
      itemId: id,
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
      <h1>Details Page</h1>
      <div className="mt-10  flex w-10/12 rounded-md bg-white">
        <div className="flex flex-col items-center p-2">
          {data && data.me && (
            <>
              <h1 className="text-lg text-gray-700">
                {data.me.items![0]!.name}
              </h1>
              <p className="text-sm text-gray-500">
                {data.me.items![0]!.quantity}
              </p>
              <p className=" text-sm text-gray-500">
                {data.me?.items![0]?.box?.name}
              </p>
            </>
          )}
        </div>
      </div>
      <div className="flex w-10/12 items-start justify-start">
        <Link to={"/profile"}>
          <Button className="my-4 bg-gray-500 ">Back</Button>
        </Link>
      </div>
    </Layout>
  );
};
export default ItemDetails;
