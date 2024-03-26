import { CSPostHogProvider } from "./provider";
import AppContainer from "@/components/AppContainer";
import AppBar from "@/components/AppBar";
import SideBar from "@/components/SideBar";
import { ClerkProvider } from "@clerk/nextjs";
import { Barlow_Condensed } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600"],
});

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={barlowCondensed.className}>
      <ClerkProvider>
      <CSPostHogProvider>
        <body>
          <AppBar />
          <div className="flex">
            <SideBar />
            <AppContainer>{children}</AppContainer>
          </div>
        </body>
      </CSPostHogProvider>
      </ClerkProvider>
    </html>
  );
}
