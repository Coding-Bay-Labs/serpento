import { type PropsWithChildren } from "react";

const AppContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="ml-80 mt-14 h-[calc(100vh-3.5rem)] bg-[url('https://res.cloudinary.com/dio8wvboq/image/upload/q_60,f_auto/v1670163387/Dungeons_And_Dragons_otpjai.png')] bg-cover p-10">
      {children}
    </div>
  );
};

export default AppContainer;
