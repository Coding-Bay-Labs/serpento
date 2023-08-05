import { type AppType } from "next/app";
import { api } from "@/utils/api";

import AppBar from "@/components/AppBar";
import AppContainer from "@/components/AppContainer";
import SideBar from "@/components/SideBar";

import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <AppBar />
      <div className="flex">
        <SideBar />
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </div>
    </>
  );
};

export default api.withTRPC(MyApp);
