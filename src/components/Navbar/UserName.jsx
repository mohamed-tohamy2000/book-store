import { GrFavorite } from "react-icons/gr";
import { RiShoppingCart2Line } from "react-icons/ri";
import img from "../../assets/images/sectionlogo/user-headset 1.svg";
import DropdownNav from "./DropdownNav";
import axios from "axios";

export default function UserName() {
  async function getProfile() {
    try {
      const token = sessionStorage.getItem("token");

      const res = await axios.get(
        "https://bookstore.eraasoft.pro/api/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(res.data);

      // محتاجة تعديل علي حسب الداتة اللي طلعة من api
      // const userName = res.data.name;
      // const userEmail = res.data.email;
      // const userImage = res.data.image;
      return res.data;
    } catch (err) {
      console.error("Error", err.message);
    }
  }

  getProfile();
  let imgD = false;

  return (
    <>
      <div className="flex items-center  w-full">
        <div className="flex items-center gap-3">
          <div className="flex gap-6 text-2xl pe-3">
            <GrFavorite />
            <RiShoppingCart2Line />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#D9F99D] flex items-center justify-center text-[#0F172A] font-bold text-sm">
            {imgD ? (
              <img src={img} alt="" className="w-full rounded-full" />
            ) : (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkcqkUHsDulyGaMQk4mV7s9_d8-FW0x8ZOQ&s"
                alt=""
                className="w-full rounded-full"
              />
            )}
          </div>
          <div className="text-right flex flex-col">
            <span className="text-white text-sm font-bold leading-tight">
              John Smith
            </span>
            <span className="text-[#94A3B8] text-[10px]">
              Johnsmith@gmail.com
            </span>
          </div>
          <DropdownNav />
        </div>
      </div>
    </>
  );
}
