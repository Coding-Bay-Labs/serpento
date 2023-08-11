import { HygraphDurationType } from "../types/spells";

export const getDurationType = (durationType: HygraphDurationType): string => {
  switch (durationType) {
    case HygraphDurationType.Concentration:
      return "Concentration";
    case HygraphDurationType.Instantaneous:
      return "Instantaneous";
    case HygraphDurationType.Special:
      return "Special";
    case HygraphDurationType.Time:
      return "Time";
    case HygraphDurationType.UntilDispelled:
      return "Until Dispelled";
    case HygraphDurationType.UntilDispelledOrTriggered:
      return "Until Dispelled or Triggered";
    default:
      return "Unknown";
  }
};
