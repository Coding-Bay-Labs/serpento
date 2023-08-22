import { getFirstHygraphBackground } from "@/server/api/hygraph/backgrounds";

export const Backgrounds = () => null;

export const getServerSideProps = async () => {
  const backgroundId = await getFirstHygraphBackground();

  if (backgroundId) {
    return {
      redirect: {
        destination: `/backgrounds/${backgroundId}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Backgrounds;
