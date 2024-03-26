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

      <span className="ml-auto">
        <SignedOut>
          <SignInButton mode="modal">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
          </SignInButton>
        </SignedOut>
        <UserButton  />
      </span>
    </nav>
  );
};

export default AppBar;
