import { gql } from "@apollo/client";
import { client } from "./client";

export const GET_FIRST_SPELL_ID = gql`
  query GetFirstSpellId {
    spells {
      id
    }
  }
`;

export const getFirstSpellId = async () => {
  const { data } = await client.query<{ spells: { id: string }[] }>({
    query: GET_FIRST_SPELL_ID,
  });

  return data.spells[0]?.id;
};
