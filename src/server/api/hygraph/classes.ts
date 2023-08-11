import { gql } from "@apollo/client";
import { client } from "./client";
import { type HygraphClass } from "@/types/classes";

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

export const getHygraphClasses = async () => {
  const { data } = await client.query<{ classes: HygraphClass[] }>({
    query: GET_CLASSES,
  });
  return data.classes;
};
