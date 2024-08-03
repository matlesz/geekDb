import MenuItem from "./MenuItem";
import { MdHomeFilled } from "react-icons/md";
import { MdInfo } from "react-icons/md";

export default function Header() {
  return (
    <div>
        <div className="flex bg-green-950 text-green-500 p-4">
            <MenuItem title="HOME" address="/" Icon={MdHomeFilled} />
            <MenuItem title="ABOUT" address="/" Icon={MdInfo} />
        </div>
        
        <div className="bg-green-950 text-green-500 p-4">

        </div>


    </div>
  )
}

// 56:55