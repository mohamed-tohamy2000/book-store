import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineLogout } from 'react-icons/hi'
import { LuCircleHelp, LuClock3 } from "react-icons/lu";
import { RxPerson } from "react-icons/rx";
export default function DropdownNav() {
    return (
      <>
            <div className="dropdown dropdown-center">
                <div tabIndex={0} role="button" className=" text-2xl mb-3"><MdKeyboardArrowDown/></div>
                <ul tabIndex="-1" className="dropdown-content bg-white menu font-semibold text-[#222222] rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a><RxPerson/>Profile</a></li>
                    <li><a><LuClock3 /> Order History</a></li>
                    <li><a><IoLocationOutline/> Address</a></li>
                    <li><a><LuCircleHelp/>Help</a></li>
                    <li><a><HiOutlineLogout/> Log Out</a></li>
                </ul>
            </div>
        </>
    )
}
