import Image from "next/image";
import { SignInButton, UserButton, SignedOut } from "@clerk/nextjs"

const AppBar = () => {
  return (
    <nav className="fixed z-20 flex h-14 w-full items-center bg-stone-800 pl-8 pr-8 shadow-md">
      <Image
        src="/img/icon_menu.svg"
        width={32}
        height={20}
        alt="Menu"
        className="mr-6"
      />
      <Image src="/img/logo.svg" width={106} height={38} alt="Serpento" />

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <span className="ml-auto"><UserButton  /></span>
    </nav>
  );
};

export default AppBar;
