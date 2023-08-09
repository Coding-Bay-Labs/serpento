enum HygraphSpellSchool {
  Abjuration = "abjuration",
  Conjuration = "conjuration",
  Divination = "divination",
  Enchantment = "enchanmtent",
  Evocation = "evocation",
  Illusion = "illusion",
  Necromancy = "necromancy",
  Transmutation = "transmutation",
}

export const getSchoolName = (school: HygraphSpellSchool): string => {
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
