import Image from "next/image";
import { HiOutlineLogout } from "react-icons/hi";
import Link from "next/link";
const Header = () => {
  return (
          <Link href="/">
    <div className="flex mx-9 bg-primaryblue justify-between items-center px-20 my-5 rounded-2xl py-3">
      <Image src="/logo.svg" alt="logo" width={160} height={55} />
      <button className="flex bg-grey text-primaryred rounded-lg px-3 py-2 gap-3 text-base font-medium">
        <HiOutlineLogout className="w-6 h-6" />
        <div className="">Logout</div>
      </button>
    </div>
        </Link>
  );
};

export default Header;
