import NavbarLogo from "./NavbarLogo";
import LinkItem from "../ui/LinkItem";
import Button from "../ui/Button";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store";
import UserName from "./UserName";

export default function Navbar() {
  const { isAuthenticated } = useAuthStore();
  const location = useLocation();
  let links = [
    { nav: "home", path: "/" },
    { nav: "books", path: "/book" },
    { nav: "about us", path: "/about" },
  ];
  return (
    <>
      <div className="w-full flex items-center justify-center py-7.5 px-4 bg-[#FFFFFF33] z-10 absolute">
        <div className="container w-full flex items-center justify-between ">
          <div className="flex ">
            <LinkItem to={"/"}>
              <NavbarLogo />
            </LinkItem>
            <div className="flex gap-5">
              {links.map((el, index) => {
                const isActive = location.pathname === el.path;
                return (
                  <Link
                    className={
                      isActive
                        ? "text-mainColor text-lg font-semibold capitalize hover:text-[#ae1e5f] hover:drop-shadow-lg hover:drop-shadow-mainColor"
                        : "text-white text-lg font-semibold capitalize hover:text-mainColor hover:drop-shadow-lg hover:drop-shadow-mainColor"
                    }
                    key={index}
                    to={el.path}
                  >
                    {el.nav}
                  </Link>
                );
              })}
            </div>
          </div>
          {isAuthenticated ? (
            <div className="">
              <UserName />
            </div>
          ) : (
            <div className="nav-btns flex items-center gap-3">
              <Button className="w-fit" isMainBtn={true}>
                <Link to={"/login"}> login</Link>
              </Button>
              <Button className="w-fit" isMainBtn={false}>
                <Link to={"/signup"}> signup</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
