import SearchPanel from "@/components/backgrounds/SearchPanel";
import Details from "@/components/backgrounds/Details";
import {
  type GetStaticPropsContext,
  type GetStaticPaths,
  type InferGetStaticPropsType,
} from "next";
import { getHygraphBackgrounds } from "@/server/api/hygraph/backgrounds";

const SpeciesDetails = ({
  background,
  backgroundsList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-white">Species</h1>
      <div className="mt-8 flex">
        <SearchPanel backgroundsList={backgroundsList} />
        <Details background={background} />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const backgroundsList = await getHygraphBackgrounds();
  const paths = backgroundsList.map((species) => ({
    params: { id: species.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const backgroundsList = await getHygraphBackgrounds();
  const background = backgroundsList.find(
    ({ id }) => id === context.params?.id
  );

  if (!background) {
    throw Error(
      `Could not find a species with id ${context.params?.id?.toString()}`
    );
  }

  return {
    props: {
      background,
      backgroundsList,
    },
    revalidate: 10,
  };
};

export default SpeciesDetails;
