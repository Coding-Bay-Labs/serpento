import { type PropsWithChildren } from "react";

const AppContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="fixed h-full w-full bg-[url('https://res.cloudinary.com/dio8wvboq/image/upload/q_60,f_auto/v1670163387/Dungeons_And_Dragons_otpjai.png')] bg-cover bg-fixed">
      <div className="ml-80 mt-14 p-10">{children}</div>
    </div>
  );
};

export default AppContainer;
