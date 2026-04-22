import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GrMicrophone } from "react-icons/gr";

export default function Search({
  isMainBtn,
  width,
  value,
  onChange,
  onSearch,
  placeholder = "Search",
  ...props
}) {
  const [innerValue, setInnerValue] = useState("");
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : innerValue;

  const handleChange = (event) => {
    if (!isControlled) {
      setInnerValue(event.target.value);
    }
    onChange?.(event);
  };

  const handleSearch = () => {
    onSearch?.(currentValue);
  };

  const widthClass = width ? `w-${width}` : "w-fit";

  return (
    <>
      <div className="flex z-10 relative">
        <input
          type="text"
          placeholder={placeholder}
          id="fname"
          value={currentValue}
          onChange={handleChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
          className=" bg-[#FFFFFF] text-[#22222280] text-center rounded-l-4xl w-134"
          {...props}
        />
        <div className="text-[#22222280] absolute right-15  top-3">
          <GrMicrophone />
        </div>

        <button
          type="button"
          onClick={handleSearch}
          className={`${widthClass} px-4 py-3 capitalize rounded-r-4xl border border-mainColor
                ${isMainBtn ? "bg-mainColor text-white hover:bg-white hover:text-mainColor" : "bg-white text-mainColor hover:bg-mainColor hover:text-white"}
            `}
        >
          <CiSearch />
        </button>
      </div>
    </>
  );
}
