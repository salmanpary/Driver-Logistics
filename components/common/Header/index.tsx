import Image from "next/image";
import Link from "next/link";
import { HiOutlineLogout } from "react-icons/hi";
const Header = () => {
  return (
    <div className="flex mx-9 bg-primaryblue justify-between items-center px-20 my-5 rounded-2xl py-3">
      <Link href="/transactions">

        <Image src="/logo.svg" alt="logo" width={160} height={55} />
      </Link>
        <Link href="/">
        <button className="flex bg-grey text-primaryred rounded-lg px-3 py-2 gap-3 text-base font-medium">
          <HiOutlineLogout className="w-6 h-6" />
          <div className="">Logout</div>
        </button>
    </Link>
      </div>
  );
};

export default Header;
