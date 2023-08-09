enum HygraphDurationValueUnit {
  Round = "round",
  Minute = "minute",
  Hour = "hour",
}

export const getDurationUnitType = (
  duration: number,
  durationUnit: HygraphDurationValueUnit
): string => {
  let durationUnitToDisplay = "";

  switch (durationUnit) {
    case HygraphDurationValueUnit.Round:
      durationUnitToDisplay = "round";
      break;
    case HygraphDurationValueUnit.Minute:
      durationUnitToDisplay = "minute";
      break;
    case HygraphDurationValueUnit.Hour:
      durationUnitToDisplay = "hour";
      break;
    default:
      durationUnitToDisplay = "Unknown";
  }

  if (duration === 1) {
    return durationUnitToDisplay;
  }

  return `${durationUnitToDisplay}s`;
};
