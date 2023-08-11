import { HygraphSpellComponent } from "../types/spells";

export const getComponentType = (component: HygraphSpellComponent): string => {
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
