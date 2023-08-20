import { getFirstSpeciesId } from "@/server/api/hygraph/species";

export const Species = () => null;

export const getServerSideProps = async () => {
  const firstSpeciesId = await getFirstSpeciesId();

  if (firstSpeciesId) {
    return {
      redirect: {
        destination: `/species/${firstSpeciesId}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Species;
