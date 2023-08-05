import Link from "next/link";

type ListingCardProps = {
  id: string;
  name: string;
  imageUrl: string;
  source: {
    name: string;
  };
};

const ListingCard = ({ id, name, imageUrl, source }: ListingCardProps) => {
  return (
    <Link href={`/classes/${id}`}>
      <div
        className="shadow-3xl relative flex h-32 items-center rounded-md bg-cover"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <span className="absolute right-1 top-1 flex h-5 items-center rounded-md bg-rose-950 px-2 text-xs uppercase text-white">
          {source.name}
        </span>
        <h3 className="ml-4 text-4xl text-white">{name}</h3>
      </div>
    </Link>
  );
};

export default ListingCard;
