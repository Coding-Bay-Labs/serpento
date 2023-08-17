export enum HygraphDamageType {
  Acid = "acid",
  Bludgeoning = "bludgeoning",
  Cold = "cold",
  Fire = "fire",
  Force = "force",
  Lightning = "lightning",
  Necrotic = "necrotic",
  Piercing = "piercing",
  Poison = "poison",
  Psychic = "psychic",
  Radiant = "radiant",
  Slashing = "slashing",
  Thunder = "thunder",
}

export type HygraphModifier = {
  details: string | null;
  damageType: HygraphDamageType;
  duration: number | null;
  id: string;
  dice: {
    id: string;
    facets: number;
    count: number;
    modifier: number;
  } | null;
  type: "damage" | "healing";
};
