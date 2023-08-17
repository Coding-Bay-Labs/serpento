import { gql } from "@apollo/client";
import { client } from "./client";
import { type RichTextContent } from "@graphcms/rich-text-types";
import {
  type HygraphArmorFields,
  type HygraphMagicItemFields,
  type HygraphItem,
  type HygraphItemDetails,
  type HygraphWeaponFields,
} from "@/types/items";

type HygraphItemInternal = {
  __typename: "Item";
  id: string;
  name: string;
  description: {
    json: RichTextContent;
  };
  costInGold: number;
  weightInPounds: number | null;
  itemType: {
    name: string;
    type: "weapon" | "armor" | "item";
  };
  baseItem: { id: string; name: string } | null;
  itemDetails: HygraphItemDetails[];
};

export const GET_ITEMS = gql`
  query GetItems($where: ItemWhereInput) {
    items(where: $where) {
      id
      name
      description {
        json
      }
      costInGold
      weightInPounds
      baseItem {
        id
        name
      }
      itemType {
        name
        type
      }
      itemDetails {
        ... on MagicItemFields {
          fieldsType
          isMagicItem
          isAttunementRequired
          rarity
        }
        ... on ArmorFields {
          id
          fieldsType
          acBaseValue
          acDexterityModifier
          acStaticBonus
          dexterityModifierCap
          doffing
          donning
          minimumStrengthRequirement
          armorProperties {
            id
            type
            name
          }
          stealthDisadvantage
        }
        ... on WeaponFields {
          fieldsType
          weaponProperties {
            id
            type
            name
          }
          modifier {
            damageType
            details
            duration
            id
            dice {
              id
              facets
              modifier
            }
            type
          }
        }
      }
    }
  }
`;

const convertInternalItem = (item: HygraphItemInternal): HygraphItem => {
  const armorFields = item.itemDetails.find(
    (d) => d.fieldsType === "armor"
  ) as HygraphArmorFields;

  const magicItemFields = item.itemDetails.find(
    (d) => d.fieldsType === "magic"
  ) as HygraphMagicItemFields;

  const weaponFields = item.itemDetails.find(
    (d) => d.fieldsType === "weapon"
  ) as HygraphWeaponFields;

  return {
    ...item,
    itemDetails: {
      armorFields: armorFields ? armorFields : null,
      magicItemFields: magicItemFields ? magicItemFields : null,
      weaponFields: weaponFields ? weaponFields : null,
    },
  };
};

type HygraphItemSearchVariables = {
  where: {
    name_contains: string;
  };
};

export const getHygraphItems = async (
  variables?: HygraphItemSearchVariables
) => {
  const { data } = await client.query<{ items: HygraphItemInternal[] }>({
    query: GET_ITEMS,
    variables,
  });

  return data.items.map(convertInternalItem);
};
