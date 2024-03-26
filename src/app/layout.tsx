import { CSPostHogProvider } from "./provider";
import AppContainer from "@/components/AppContainer";
import AppBar from "@/components/AppBar";
import SideBar from "@/components/SideBar";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body>
          <AppBar />
          <div className="flex">
            <SideBar />
            <AppContainer>{children}</AppContainer>
          </div>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
