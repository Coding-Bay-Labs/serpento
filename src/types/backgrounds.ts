import { type RichTextContent } from "@graphcms/rich-text-types";

export enum HygraphSkillType {
  Acrobatics = "acrobatics",
  AnimalHandling = "animalHandling",
  Arcana = "arcana",
  Athletics = "athletics",
  Deception = "deception",
  History = "history",
  Insight = "insight",
  Intimidation = "intimidation",
  Investigation = "investigation",
  Medicine = "medicine",
  Nature = "nature",
  Perception = "perception",
  Performance = "performance",
  Persuasion = "persuasion",
  Religion = "religion",
  SleightOfHand = "sleightOfHand",
  Stealth = "stealth",
  Survival = "survival",
}

export type HygraphBackground = {
  __typename: "Background";
  id: string;
  name: string;
  introduction: {
    json: RichTextContent;
  };
  primaryFeatureName: string;
  primaryFeatureDescription: {
    json: RichTextContent;
  };
  backgroundSpecificTableName: string;
  backgroundSpecificTableDescription: {
    raw: string;
  };
  skillProficienciesDescription: {
    json: RichTextContent;
  };
  skillProficiencies: {
    id: string;
    name: string;
    type: HygraphSkillType;
  }[];
  languagesDescription: {
    json: RichTextContent;
  };
  languageProficiencies: {
    id: string;
    name: string;
  }[];
  toolProficienciesDescription: {
    json: RichTextContent;
  };
  toolsProficiencies: {
    id: string;
    name: string;
  }[];
  additionalSpells: {
    id: string;
    name: string;
  }[];
  equipmentDescription: {
    json: RichTextContent;
  };
  equipment: {
    id: string;
    name: string;
  }[];
};
