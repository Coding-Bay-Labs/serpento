import { gql } from "@apollo/client";
import { client } from "./client";
import { type HygraphSpell } from "@/types/spells";

export const GET_SPELLS = gql`
  query GetSpells($where: SpellWhereInput) {
    spells(where: $where) {
      id
      name
      isRitual
      level
      components
      materialComponents
      rangeDistanceInFeets
      rangeType
      spellSchool
      updatedAt
      hasHigherLevelsScaling
      higherLevelsScalingType
      durationUnit
      durationType
      duration
      components
      castingTimeType
      castingTime
      isAreaOfEffect
      areaOfEffect {
        __typename
        id
        areaOfEffectSizeInFeets
        areaOfEffectType
      }
      reactionCastingTimeDescription
      description {
        json
      }
      availableForClasses {
        id
        name
      }
    }
  }
`;

type HygraphSpellSearchVariables = {
  where: {
    name_contains: string;
  };
};

export const getHygraphSpells = async (
  variables?: HygraphSpellSearchVariables
) => {
  const { data } = await client.query<{ spells: HygraphSpell[] }>({
    query: GET_SPELLS,
    variables,
  });
  return data.spells;
};
