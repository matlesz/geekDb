import Link from "next/link";
import MenuItem from "./MenuItem";
import { MdHomeFilled } from "react-icons/md";
import { MdInfo } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";

export default function Header() {
  return (
    <div className="flex justify-between p-4 mx-2 max-w-6xl sm:mx-auto items-center py-6">
        <div className="flex">
            <MenuItem title="HOME" address="/" Icon={MdHomeFilled} />
            <MenuItem title="ABOUT" address="/about" Icon={MdInfo} />
        </div>
        
        <div className="flex">
            <Link href="/">
              <h2 className="text-2xl font-bold text-green-950 bg-green-500 py-1 px-2 rounded-lg mr-1">geekDB</h2>
            </Link>
            <MenuItem title="Login" address="/login" Icon={RiAccountCircleFill} />
        </div>


    </div>
  )
}