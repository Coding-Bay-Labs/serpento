import SearchPanel from "@/components/species/SearchPanel";
import Details from "@/components/species/Details";
import { getHygraphSpecies } from "@/server/api/hygraph/species";
import {
  type GetStaticPropsContext,
  type GetStaticPaths,
  type InferGetStaticPropsType,
} from "next";

const SpeciesDetails = ({
  species,
  speciesList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-white">Species</h1>
      <div className="mt-8 flex">
        <SearchPanel speciesList={speciesList} />
        <Details species={species} />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const speciesList = await getHygraphSpecies();
  const paths = speciesList.map((species) => ({
    params: { id: species.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const speciesList = await getHygraphSpecies();
  const species = speciesList.find(({ id }) => id === context.params?.id);

  if (!species) {
    throw Error(
      `Could not find a species with id ${context.params?.id?.toString()}`
    );
  }

  return {
    props: {
      species,
      speciesList,
    },
    revalidate: 10,
  };
};

export default SpeciesDetails;
