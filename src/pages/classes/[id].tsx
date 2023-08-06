import { getHygraphClasses } from "@/server/api/hygraph/classes";
import {
  type GetStaticPaths,
  type InferGetStaticPropsType,
  type GetStaticPropsContext,
} from "next";
import StatsTable from "@/components/classes/StatsTable";
import { useState } from "react";
import HygraphRichText from "@/components/HygraphRichText";

const ClassDetails = ({
  characterClass,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { name, description } = characterClass;

  const [section, setSection] = useState<"features" | "description" | "spells">(
    "features"
  );

  const handleSetSection = (section: "features" | "description" | "spells") => {
    return () => setSection(section);
  };

  return (
    <>
      <h1 className="text-3xl font-semibold text-white">Classes / {name}</h1>
      <div className="mt-8">
        <div className="grid grid-cols-3">
          <button
            className={`flex w-full justify-center rounded-tl-lg ${
              section === "features" ? "bg-indigo-600" : "bg-indigo-800"
            } py-4 text-xl font-semibold text-white `}
            onClick={handleSetSection("features")}
          >
            Features
          </button>
          <button
            className={`flex w-full justify-center ${
              section === "description" ? "bg-indigo-600" : "bg-indigo-800"
            } py-4 text-xl font-semibold text-white`}
            onClick={handleSetSection("description")}
          >
            Description
          </button>
          <button
            className={`flex w-full justify-center rounded-tr-lg ${
              section === "spells" ? "bg-indigo-600" : "bg-indigo-800"
            } py-4 text-xl font-semibold text-white`}
            onClick={handleSetSection("spells")}
          >
            Spells
          </button>
        </div>

        <div className="w-full bg-stone-800">
          {section === "features" && (
            <>
              <StatsTable />
            </>
          )}
          {section === "description" && (
            <div className="p-4">
              <HygraphRichText content={description.json} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const classes = await getHygraphClasses();
  const paths = classes.map((characterClass) => ({
    params: { id: characterClass.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const classes = await getHygraphClasses();
  const characterClass = classes.find(({ id }) => id === context.params?.id);

  if (!characterClass) {
    throw Error(
      `Could not find a character class with id ${context.params?.id?.toString()}`
    );
  }

  return {
    props: {
      characterClass,
    },
    revalidate: 10,
  };
};

export default ClassDetails;
