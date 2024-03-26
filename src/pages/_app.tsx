import { type AppType } from "next/app";
import { api } from "@/utils/api";
import { ClerkProvider } from "@clerk/nextjs";

import AppBar from "@/components/AppBar";
import AppContainer from "@/components/AppContainer";
import SideBar from "@/components/SideBar";

import "@/styles/globals.css";
import { Barlow_Condensed } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <main className={barlowCondensed.className}>
        <ClerkProvider>
        <AppBar />
        <div className="flex">
          <SideBar />
          <AppContainer>
            <Component {...pageProps} />
          </AppContainer>
        </div>
        </ClerkProvider>
      </main>
    </>
  );
};

export default api.withTRPC(MyApp);
