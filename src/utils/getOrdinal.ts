export const getOrdinal = (number: number): string => {
  if (typeof number !== "number") {
    return number;
  }

  const rule = new Intl.PluralRules("en", { type: "ordinal" });

  const ordinalSuffixes: Record<string, string> = {
    one: "st",
    two: "nd",
    few: "rd",
    other: "th",
  };

  const pluralCategory = rule.select(number);
  const ordinalSuffix =
    ordinalSuffixes[pluralCategory] ?? ordinalSuffixes.other;

  return `${number}-${ordinalSuffix}`;
};
