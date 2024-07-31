import MenuItem from "./MenuItem";
import { MdHomeFilled } from "react-icons/md";


export default function Header() {
  return (
    <div>
        <div className="bg-gray-800 text-white p-4">
            <MenuItem title="HOME" address="/" Icon={MdHomeFilled} />
        </div>
        
        <div className="bg-gray-800 text-white p-4">

        </div>


    </div>
  )
}
