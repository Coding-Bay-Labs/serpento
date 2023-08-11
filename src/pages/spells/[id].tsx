import Details from "@/components/spells/Details";
import SearchPanel from "@/components/spells/SearchPanel";
import { getHygraphSpells } from "@/server/api/hygraph/spells";
import {
  type InferGetStaticPropsType,
  type GetStaticPaths,
  type GetStaticPropsContext,
} from "next";

export const runtime = "experimental-edge";

const SpellDetails = ({
  spell,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-white">Spells</h1>
      <div className="mt-8 flex">
        <SearchPanel />
        <Details spell={spell} />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const spells = await getHygraphSpells();
  const paths = spells.map((spell) => ({
    params: { id: spell.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const spells = await getHygraphSpells();
  const spell = spells.find(({ id }) => id === context.params?.id);

  if (!spell) {
    throw Error(
      `Could not find a spell with id ${context.params?.id?.toString()}`
    );
  }

  return {
    props: {
      spell,
    },
    revalidate: 10,
  };
};

export default SpellDetails;
