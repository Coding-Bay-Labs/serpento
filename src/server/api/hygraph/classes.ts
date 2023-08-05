import { gql } from "@apollo/client";
import { type RichTextContent } from "@graphcms/rich-text-types";
import { client } from "./client";

export const GET_CLASSES = gql`
  query GetClasses {
    classes {
      id
      name
      description {
        json
      }
      extension {
        name
        id
      }
      hpDice {
        facets
        modifier
        count
        id
      }
      hpScalingCharacteristic
      listingImage {
        url
        width
        height
      }
    }
  }
`;

export type HygraphClass = {
  __typename: "Class";
  id: string;
  name: string;
  description: {
    __typename: "ClassDescriptionRichText";
    json: RichTextContent;
  };
  extension: {
    __typename: "Extension";
    id: string;
    name: string;
  };
  hpDice: {
    __typename: "Dice";
    id: string;
    facets: number;
    modifier: number;
    count: number;
  };
  hpScalingCharacteristic: string;
  listingImage: {
    __typename: "Asset";
    url: string;
    width: number;
    height: number;
  };
};

export const getHygraphClasses = async () => {
  const { data } = await client.query<{ classes: HygraphClass[] }>({
    query: GET_CLASSES,
  });
  return data.classes;
};
