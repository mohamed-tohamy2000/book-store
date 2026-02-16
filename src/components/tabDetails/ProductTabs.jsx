import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { useNavProductPage } from "../../store/index";

export function ProductTabs({ details = [] }) {
  const Location = useLocation();
  const { nav } = useNavProductPage();

  return (
    <div className="flex flex-col gap-4">
      <nav className="flex justify-start items-center text-white border-b border-gray-300 w-full">
        {nav.map((el, index) => {
          const isActive = Location.pathname === el.path;
          return (
            <Link
              key={index}
              to={el.path}
              className={
                isActive
                  ? "text-[#222222] border-b-2 border-[#EAA451] px-5 py-3 font-bold "
                  : "text-[#22222280] px-5 py-3 font-bold"
              }
            >
              {el.link}
            </Link>
          );
        })}
      </nav>

      <div>
        <Outlet context={{ details }} />
      </div>
    </div>
  );
}
