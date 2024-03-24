import { HygraphSpellSchool } from "../types/spells";

export const getSchoolName = (school: string): string => {
  switch (school) {
    case HygraphSpellSchool.Abjuration:
      return "Abjuration";
    case HygraphSpellSchool.Conjuration:
      return "Conjuration";
    case HygraphSpellSchool.Divination:
      return "Divination";
    case HygraphSpellSchool.Enchantment:
      return "Enchantment";
    case HygraphSpellSchool.Evocation:
      return "Evocation";
    case HygraphSpellSchool.Illusion:
      return "Illusion";
    case HygraphSpellSchool.Necromancy:
      return "Necromancy";
    default:
      return "Unknown";
  }
};
