enum HygraphSpellComponent {
  Verbal = "verbal",
  Somatic = "somatic",
  Material = "material",
}

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
