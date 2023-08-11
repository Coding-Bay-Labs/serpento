import Details from "@/components/items/Details";
import SearchPanel from "@/components/items/SearchPanel";
import { getHygraphItems } from "@/server/api/hygraph/items";
import {
  type InferGetStaticPropsType,
  type GetStaticPaths,
  type GetStaticPropsContext,
} from "next";

const ItemDetails = ({
  item,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-white">Items</h1>
      <div className="mt-8 flex">
        <SearchPanel />
        <Details item={item} />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const items = await getHygraphItems();
  const paths = items.map((item) => ({
    params: { id: item.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const items = await getHygraphItems();
  const item = items.find(({ id }) => id === context.params?.id);

  if (!item) {
    throw Error(
      `Could not find a item with id ${context.params?.id?.toString()}`
    );
  }

  return {
    props: {
      item,
    },
    revalidate: 10,
  };
};

export default ItemDetails;
