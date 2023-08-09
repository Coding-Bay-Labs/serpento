enum HygraphSpellRangeType {
  Self = "self",
  Touch = "touch",
  Ranged = "ranged",
  Sight = "sight",
  Unlimited = "unlimited",
}

export const getRangeTypeUnits = (rangeType: HygraphSpellRangeType): string => {
  switch (rangeType) {
    case HygraphSpellRangeType.Self:
      return "Self";
    case HygraphSpellRangeType.Touch:
      return "Touch";
    case HygraphSpellRangeType.Ranged:
      return "feet";
    case HygraphSpellRangeType.Sight:
      return "feet";
    case HygraphSpellRangeType.Unlimited:
      return "Unlimited";
    default:
      return "Unknown";
  }
};
