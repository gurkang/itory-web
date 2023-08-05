import { FC } from "react";
import { useQuery } from "@apollo/client";
import { Item, ItemsDocument, ItemsQuery } from "../generated/graphql";
import ItemCard from "../components/ItemCard";
import { useItemsStore } from "../store/itemStore";
import Layout from "../components/Layout";
import ItemSearchBar from "../components/ItemSearchBar";

type Props = {
  name?: string;
};

const Profile: FC<Props> = () => {
  const { filteredItems, setItems } = useItemsStore();
  const { loading, error } = useQuery<ItemsQuery>(ItemsDocument, {
    onCompleted: (data) => {
      setItems(data.items as Item[]);
    },
  });

  if (loading) {
    return (
      <Layout>
        <div>Loading...</div>;
      </Layout>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Layout>
      <div className="mt-5 flex w-full max-w-6xl flex-col items-center gap-2">
        <div className="flex w-11/12 justify-end">
          <ItemSearchBar />
        </div>
        {filteredItems &&
          filteredItems &&
          filteredItems.map((item) => (
            <ItemCard key={item.id} item={item as Item} />
          ))}
      </div>
    </Layout>
  );
};

export default Profile;
