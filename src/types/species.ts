import { type RichTextContent } from "@graphcms/rich-text-types";
import { type HygraphModifier } from "./modifier";

export type HygraphSpecies = {
  id: string;
  name: string;
  speedBurrowing: number | null;
  speedClimbing: number | null;
  speedFlying: number | null;
  speedSwimming: number | null;
  speedWalking: number | null;
  isVariant: boolean;
  isSubrace: boolean;
  avatar: {
    id: string;
    url: string;
    height: number;
    width: number;
  } | null;
  description: {
    json: RichTextContent;
  };
  extension: {
    id: string;
    name: string;
  };
  sizeType: {
    id: string;
    name: string;
    type: "tiny" | "small" | "medium" | "large" | "huge" | "gargantuan";
  };
  speciesTraits: {
    id: string;
    name: string;
    snippet: string;
    isCalledOut: boolean;
    hideInBuilder: boolean;
    hideInCharacterSheet: boolean;
    hideOnDetailsPage: boolean;
    featureType: "granted" | "replacement" | "additional";
    displayOrder: number;
    requiredCharacterLevel: number;
    characterLevelsWhereOptionsKnown: number[];
    description: {
      json: RichTextContent;
    };
    creatureRules: {
      id: string;
    }[];
    modifiers: HygraphModifier[];
    spells: {
      id: string;
      name: string;
    }[];
    additionalSpells: {
      id: string;
      name: string;
    }[];
    traitsToReplace: {
      id: string;
      name: string;
    }[];
    speciesTraitOptions: {
      id: string;
      name: string;
      isGranted: boolean;
      description: {
        json: RichTextContent;
      };
      modifiers: HygraphModifier[];
      creatureRules: {
        id: string;
        name: string;
      }[];
    }[];
  };
};
