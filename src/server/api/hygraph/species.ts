import { gql } from "@apollo/client";
import { client } from "./client";
import { type HygraphSpecies } from "@/types/species";

const TOP_LEVEL_FIELDS = `
id
name
speedBurrowing
speedClimbing
speedFlying
speedSwimming
speedWalking
isVariant
isSubrace
avatar {
  id
  url
  height
  width
}
description {
  json
}
extension {
  id
  name
}
sizeType {
  id
  name
  type
}
speciesTraits {
  id
  name
  snippet
  isCalledOut
  hideInBuilder
  hideInCharacterSheet
  hideOnDetailsPage
  featureType
  displayOrder
  requiredCharacterLevel
  characterLevelsWhereOptionsKnown
  description {
    json
  }
  creatureRules {
    id
    ruleType
    monsterType {
      id
      name
      type
    }
    monstersToSelectFrom {
      id
      name
      sizeType {
        name
        type
      }
    }
    maxChallengeRating
    challengeRatingLevelDivisor
  }
  modifiers {
    id
    details
    dice {
      facets
      modifier
      count
    }
  }
  spells {
    id
    name
  }
  additionalSpells {
    id
    name
  }
  traitsToReplace {
    id
    name
  }
  speciesTraitOptions {
    id
    name
    snippet
    isGranted
    description {
      json
    }
    modifiers {
      id
    }
    creatureRules {
      id
      resrictedMovementTypes
    }
  }
}
`;

const GET_SPECIES = gql`
  query Species {
    speciesList(where: { isSubrace: false, isVariant: false }) {
      ${TOP_LEVEL_FIELDS}
      childSpecies {
        ${TOP_LEVEL_FIELDS}
      }
    }
  }
`;

export const getHygraphSpecies = async () => {
  const { data } = await client.query<{ speciesList: HygraphSpecies }>({
    query: GET_SPECIES,
  });
  return data.speciesList;
};
