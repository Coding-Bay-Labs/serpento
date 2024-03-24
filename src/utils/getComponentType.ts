import { HygraphSpellComponent } from "../types/spells";

export const getComponentType = (component: string): string => {
  switch (component) {
    case HygraphSpellComponent.Verbal:
      return "Verbal";
    case HygraphSpellComponent.Somatic:
      return "Somatic";
    case HygraphSpellComponent.Material:
      return "Material";
    default:
      return "Unknown";
  }
};
