import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
const WelcomeToDriver = () => {
  const matches = useMediaQuery("(min-width: 640px)");
  return (
    <div className="bg-primaryblue h-screen grid place-items-center sm:h-[50vh] sm:rounded-md">
      <div className="flex flex-col justify-center items-center gap-11 md:gap-5">
        <h1 className="text-4xl font-bold text-white">Welcome to</h1>
        <div className="w-fit">
          {matches ? (
            <Image src="/logo.svg" alt="logo" width={300} height={103} />
          ) : (
            <Image src="/logo.svg" alt="logo" width={200} height={103} />
          )}
        </div>
        <p className="font-normal text-lg text-white text-center px-20 sm:px-5 sm:text-sm sm:text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
      </div>
    </div>
  );
};

export default WelcomeToDriver;
