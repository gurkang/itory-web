import React from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { Box, useGetSpecificBoxQuery } from "../generated/graphql";
import BoxCard from "../components/BoxCard";

type BoxDetailsProps = {};

const BoxDetails: React.FC<BoxDetailsProps> = () => {
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
      <BoxCard box={data?.me?.boxes![0] as Box} />
    </Layout>
  );
};
export default BoxDetails;
