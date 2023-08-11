import { gql } from "@apollo/client";
import { client } from "./client";

export const GET_FIRST_ITEM_ID = gql`
  query GetFirstItemId {
    items {
      id
    }
  }
`;

export const getFirstItemId = async () => {
  const { data } = await client.query<{ items: { id: string }[] }>({
    query: GET_FIRST_ITEM_ID,
  });

  return data.items[0]?.id;
};
