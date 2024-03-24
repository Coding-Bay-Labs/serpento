import { getFirstSpellId } from "@/server/api/hygraph/spell";

export const Spells = () => null;

export const getServerSideProps = async () => {
  const firstSpellId = await getFirstSpellId();

  if (firstSpellId) {
    return {
      redirect: {
        destination: `/spells/${firstSpellId}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Spells;
