import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { LuCircleHelp, LuClock3 } from "react-icons/lu";
import { RxPerson } from "react-icons/rx";
import { RiAdminLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store";
import { authApi } from "../../api";

export default function DropdownNav() {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const handleLogout = async () => {
    try {
      await authApi.logout();
    } catch (error) {
      console.log(error);
    } finally {
      logout();
      navigate("/login");
    }
  };

  return (
    <>
      <div className="dropdown dropdown-center">
        <div tabIndex={0} role="button" className=" text-2xl mb-3">
          <MdKeyboardArrowDown />
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content bg-white menu font-semibold text-[#222222] rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <Link to="/Profile">
              <RxPerson />
              Profile
            </Link>
          </li>
          <li>
            <Link to="/History">
              <LuClock3 />
              Order History
            </Link>
          </li>
          <li>
            <a>
              <IoLocationOutline />
              Address
            </a>
          </li>
          <li>
            <a>
              <LuCircleHelp />
              Help
            </a>
          </li>
          <li>
            <Link to="/admin">
              <RiAdminLine />
              Admin
            </Link>
          </li>
          <li>
            <button type="button" onClick={handleLogout} className="w-full text-left">
              <HiOutlineLogout /> Log Out
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
