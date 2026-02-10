import NavbarLogo from "../Navbar/NavbarLogo";
import LinkItem from "../ui/LinkItem";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaEarthAmericas, FaXTwitter } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-[#3B2F4A] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* الجزء العلوي */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <NavbarLogo />
            <nav className="flex items-center gap-6">
              <LinkItem to={"/"}>home</LinkItem>
              <LinkItem to={"books"}>books</LinkItem>
              <LinkItem to={"about"}>about us</LinkItem>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <FaFacebook className="w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors" />
            <FaInstagram className="w-6 h-6 hover:text-pink-400 cursor-pointer transition-colors" />
            <AiOutlineYoutube className="w-6 h-6 hover:text-red-500 cursor-pointer transition-colors" />
            <FaXTwitter className="w-6 h-6 hover:text-gray-400 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* الخط الفاصل */}
        <div className="w-full h-px bg-gray-500/30"></div>

        {/* الجزء السفلي المعدل */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-300">
          <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-center text-center">
            <p>
              © 2024{" "}
              <span className="font-semibold text-white">
                All Copy Rights Reserved
              </span>
            </p>
            <span className="hidden md:block">|</span>
            <p>
              Developed By{" "}
              <span className="font-bold text-[#9b87b3] hover:underline cursor-pointer">
                EraaSoft
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3 bg-[#4B3D5A] px-4 py-2 rounded-lg cursor-pointer hover:bg-[#524463] transition-all">
            <FaEarthAmericas />
            <span className="flex items-center font-medium">
              English <MdKeyboardArrowRight className="text-xl" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}