import { gql } from "@apollo/client";
import { client } from "./client";
import { type HygraphBackground } from "@/types/backgrounds";

const GET_BACKGROUNDS = gql`
  query Backgrounds {
    backgrounds {
      id
      name
      introduction {
        json
      }
      primaryFeatureName
      primaryFeatureDescription {
        json
      }
      backgroundSpecificTableName
      backgroundSpecificTableDescription {
        json
      }
      skillProficienciesDescription {
        json
      }
      skillProficiencies {
        id
        name
        type
      }
      languagesDescription {
        json
      }
      languageProficiencies {
        id
        name
      }
      toolProficienciesDescription {
        json
      }
      toolsProficiencies {
        id
        name
      }
      additionalSpells {
        id
        name
      }
      equipmentDescription {
        json
      }
      equipment {
        id
        name
      }
    }
  }
`;

const GET_FIRST_BACKGROUND = gql`
  query Backgrounds {
    backgrounds {
      id
    }
  }
`;

export const getHygraphBackgrounds = async () => {
  const { data } = await client.query<{ backgrounds: HygraphBackground[] }>({
    query: GET_BACKGROUNDS,
  });

  return data.backgrounds;
};

export const getFirstHygraphBackground = async () => {
  const { data } = await client.query<{ backgrounds: { id: string }[] }>({
    query: GET_FIRST_BACKGROUND,
  });

  return data.backgrounds[0]?.id;
};
