import { type HygraphSpell } from "@/server/api/hygraph/spells";
import { getOrdinal } from "@/utils/getOrdinal";
import HygraphRichText from "../HygraphRichText";
import { getSchoolName } from "@/utils/getSchool";
import { getRangeTypeUnits } from "@/utils/getRangeType";
import { getDurationType } from "@/utils/getDurationType";
import { getComponentType } from "@/utils/getComponentType";
import { getDurationUnitType } from "@/utils/getDurationUnitType";

const Details = ({
  spell: {
    name,
    description,
    level,
    spellSchool,
    castingTime,
    castingTimeType,
    rangeType,
    rangeDistanceInFeets,
    duration,
    durationType,
    durationUnit,
    components,
    materialComponents,
    availableForClasses,
  },
}: {
  spell: HygraphSpell;
}) => {
  return (
    <div className="ml-8 h-[calc(100vh-14rem)] w-[calc(100%-32rem)] flex-col rounded-md bg-stone-900">
      <div className="flex h-12 w-full items-center justify-between rounded-tl-md rounded-tr-md bg-stone-800 px-4">
        <h2 className="text-lg text-white">{name}</h2>
        <div>
          <span className="font-semibold text-white">
            {getOrdinal(level)} level
          </span>
          <span className="font-semibold text-white/50"> • </span>
          <span className="font-semibold text-white">
            {getSchoolName(spellSchool)}
          </span>
        </div>
      </div>
      <div className="flex-col px-4 py-2">
        <div className="rounded-lg bg-neutral-800">
          <div className="grid grid-cols-3 border-b border-white/10">
            <div className="flex flex-col border-r border-white/10 px-4 py-2">
              <h4 className="font-semibold text-white">Time to cast</h4>
              <span className="text-white">
                {castingTime} {castingTimeType}
              </span>
            </div>
            <div className="flex flex-col border-r border-white/10 px-4 py-2">
              <h4 className="font-semibold text-white">Distance</h4>
              <span className="text-white">
                {`${rangeDistanceInFeets > 0 ? rangeDistanceInFeets : ""}
                ${getRangeTypeUnits(rangeType)}`}
              </span>
            </div>
            <div className="flex flex-col px-4 py-2">
              <h4 className="font-semibold text-white">Duration</h4>
              <span className="text-white">
                {duration} {getDurationType(durationType)}{" "}
                {durationUnit &&
                  duration &&
                  `(${getDurationUnitType(duration, durationUnit)})`}
              </span>
            </div>
          </div>
          <div className="flex flex-col border-r border-white/10 px-4 py-2">
            <h4 className="font-semibold text-white">Components</h4>
            <span className="text-white">
              {components.map((c) => getComponentType(c)).join(", ")}
              {materialComponents && ` (${materialComponents.join(", ")})`}
            </span>
          </div>
        </div>
        <HygraphRichText content={description.json} />
        <div className="flex flex-col">
          <h4 className="font-semibold text-white">Classes:</h4>
          <div className="flex">
            {availableForClasses.map((c) => {
              return (
                <span key={c.id} className="cursor-pointer text-indigo-400">
                  {c.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
