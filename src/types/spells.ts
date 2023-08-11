import { type RichTextContent } from "@graphcms/rich-text-types";

export enum HygraphSpellComponent {
  Verbal = "verbal",
  Somatic = "somatic",
  Material = "material",
}

export enum HygraphSpellRangeType {
  Self = "self",
  Touch = "touch",
  Ranged = "ranged",
  Sight = "sight",
  Unlimited = "unlimited",
}

export enum HygraphSpellSchool {
  Abjuration = "abjuration",
  Conjuration = "conjuration",
  Divination = "divination",
  Enchantment = "enchanmtent",
  Evocation = "evocation",
  Illusion = "illusion",
  Necromancy = "necromancy",
  Transmutation = "transmutation",
}

export enum HygraphHigherLevelScalingType {
  CharacterLevel = "characterLevel",
  SpellScale = "spellScale",
  SpellLevel = "spellLevel",
}

export enum HygraphDurationValueUnit {
  Round = "round",
  Minute = "minute",
  Hour = "hour",
}

export enum HygraphDurationType {
  Concentration = "concentration",
  Instantaneous = "instantaneous",
  Special = "special",
  Time = "time",
  UntilDispelled = "untilDispelled",
  UntilDispelledOrTriggered = "untilDispelledOrTriggered",
}

export enum HygraphCastingTimeType {
  Action = "action",
  BonusAction = "bonusAction",
  Hour = "hour",
  Minute = "minute",
  NoAction = "noAction",
  Reaction = "reaction",
  Special = "special",
}

export enum HygraphAreaOfEffectType {
  Cone = "cone",
  Cube = "cube",
  Cylinder = "cylinder",
  Line = "line",
  Sphere = "sphere",
  Square = "square",
  SquareFeet = "squareFeet",
}

export type HygraphAreaOfEffect = {
  __typename: "AreaOfEffect";
  id: string;
  areaOfEffectType: HygraphAreaOfEffectType;
  areaOfEffectSizeInFeets: number;
};

export type HygraphSpell = {
  __typename: "Spell";
  id: string;
  name: string;
  isRitual: boolean;
  level: number;
  components: HygraphSpellComponent[];
  materialComponents: string[];
  rangeDistanceInFeets: number;
  rangeType: HygraphSpellRangeType;
  spellSchool: HygraphSpellSchool;
  hasHigherLevelScaling: boolean;
  higherLevelScalingType: HygraphHigherLevelScalingType;
  durationUnit: HygraphDurationValueUnit | null;
  durationType: HygraphDurationType;
  duration: number | null;
  castingTimeType: HygraphCastingTimeType;
  castingTime: number;
  isAreaOfEffect: boolean | null;
  areaOfEffect: HygraphAreaOfEffect | null;
  reactionCastingTimeDescription: string | null;
  description: {
    json: RichTextContent;
  };
  availableForClasses: {
    __typename: "Class";
    id: string;
    name: string;
  }[];
};
