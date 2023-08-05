import Link from "next/link";
import { useRouter } from "next/router";

const SideBar = () => {
  const { pathname } = useRouter();

  return (
    <div className="fixed mt-14 h-screen w-80 bg-stone-800">
      <div className="mt-12 flex w-full flex-col">
        <Link
          href="/classes"
          className={`flex h-14 items-center pl-8 text-xl font-semibold text-white hover:bg-stone-900 ${
            pathname === "/classes" ? "bg-stone-950" : ""
          }`}
        >
          Classes
        </Link>
        <Link
          href="/races"
          className={`flex h-14 items-center pl-8 text-xl font-semibold text-white hover:bg-stone-900 ${
            pathname === "/races" ? "bg-stone-950" : ""
          }`}
        >
          Races
        </Link>
        <Link
          href="/spells"
          className={`flex h-14 items-center pl-8 text-xl font-semibold text-white hover:bg-stone-900 ${
            pathname === "/spells" ? "bg-stone-950" : ""
          }`}
        >
          Spells
        </Link>
        <Link
          href="/backgrounds"
          className={`flex h-14 items-center pl-8 text-xl font-semibold text-white hover:bg-stone-900 ${
            pathname === "/backgrounds" ? "bg-stone-950" : ""
          }`}
        >
          Backgrounds
        </Link>
        <Link
          href="/items"
          className={`flex h-14 items-center pl-8 text-xl font-semibold text-white hover:bg-stone-900 ${
            pathname === "/items" ? "bg-stone-950" : ""
          }`}
        >
          Items
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
