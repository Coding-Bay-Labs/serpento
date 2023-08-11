import { gql } from "@apollo/client";
import { client } from "./client";
import { type HygraphItem } from "@/types/items";

export const GET_ITEMS = gql`
  query GetItems($where: ItemWhereInput) {
    items(where: $where) {
      id
      name
      rarity
      itemType
      magicItemType
      armorType
      baseWeaponType
      dexterityBonusType
      dexterityBonusStatic
      minStrengthRequirement
      isStealthCheckRequired
      isAttunementRequired
      attunementDescription
      listingImage {
        url
        height
        width
      }
      description {
        json
      }
    }
  }
`;

type HygraphItemSearchVariables = {
  where: {
    name_contains: string;
  };
};

export const getHygraphItems = async (
  variables?: HygraphItemSearchVariables
) => {
  const { data } = await client.query<{ items: HygraphItem[] }>({
    query: GET_ITEMS,
    variables,
  });
  return data.items;
};
