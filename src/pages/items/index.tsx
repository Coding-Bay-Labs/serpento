import { getFirstItemId } from "@/server/api/hygraph/item";

export const Spells = () => null;

export const getServerSideProps = async () => {
  const firstSpellId = await getFirstItemId();

  if (firstSpellId) {
    return {
      redirect: {
        destination: `/items/${firstSpellId}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Spells;
