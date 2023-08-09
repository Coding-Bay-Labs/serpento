import Link from "next/link";
import { useRouter } from "next/router";

const SideBar = () => {
  const { pathname } = useRouter();

  return (
    <div className="fixed z-10 mt-14 h-screen w-80 bg-stone-800/50 backdrop-blur-sm">
      <div className="mt-12 flex w-full flex-col">
        <Link
          href="/classes"
          className={`flex h-14 items-center pl-8 text-xl font-semibold  hover:text-white/100 hover:shadow-[5px_0_0px_0px_inset_white] ${
            pathname.includes("/classes")
              ? "text-white/100 shadow-[5px_0_0px_0px_inset_white]"
              : "text-white/60"
          }`}
        >
          Classes
        </Link>
        <Link
          href="/races"
          className={`flex h-14 items-center pl-8 text-xl font-semibold hover:text-white/100 hover:shadow-[5px_0_0px_0px_inset_white] ${
            pathname === "/races"
              ? "text-white/100 shadow-[5px_0_0px_0px_inset_white]"
              : "text-white/60"
          }`}
        >
          Races
        </Link>
        <Link
          href="/spells"
          className={`flex h-14 items-center pl-8 text-xl font-semibold text-white/60 hover:text-white/100 hover:shadow-[5px_0_0px_0px_inset_white] ${
            pathname.includes("/spells")
              ? "text-white/100 shadow-[5px_0_0px_0px_inset_white]"
              : "text-white/60"
          }`}
        >
          Spells
        </Link>
        <Link
          href="/backgrounds"
          className={`flex h-14 items-center pl-8 text-xl font-semibold  hover:text-white/100 hover:shadow-[5px_0_0px_0px_inset_white] ${
            pathname === "/backgrounds"
              ? "text-white/100 shadow-[5px_0_0px_0px_inset_white]"
              : "text-white/60"
          }`}
        >
          Backgrounds
        </Link>
        <Link
          href="/items"
          className={`flex h-14 items-center pl-8 text-xl font-semibold text-white/60 hover:text-white/100 hover:shadow-[5px_0_0px_0px_inset_white] ${
            pathname === "/items"
              ? "text-white/100 shadow-[5px_0_0px_0px_inset_white]"
              : ""
          }`}
        >
          Items
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
