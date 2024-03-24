import { getHygraphClasses } from "@/server/api/hygraph/classes";
import ListingCard from "@/components/classes/ListingCard";
import { type InferGetStaticPropsType } from "next";

const Classes = ({
  classes,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-white">Classes</h1>
      <div className="mt-8 grid grid-cols-4 gap-4">
        {classes.map(({ id, name, listingImage, extension }) => (
          <ListingCard
            key={id}
            id={id}
            name={name}
            imageUrl={listingImage?.url}
            source={{ name: extension.name }}
          />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const classes = await getHygraphClasses();

  return {
    props: {
      classes,
    },
    revalidate: 10,
  };
}

export default Classes;
