export default function Button({ children, isMainBtn, classn }) {
  return (
    <>
      <button
        className={`${classn? classn :    " rounded-lg  px-4 py-3  "  }capitalize border border-mainColor
          ${
            isMainBtn
              ? "bg-mainColor text-white hover:bg-white hover:shadow hover:shadow-mainColor hover:text-mainColor"
              : "bg-white text-mainColor hover:bg-mainColor hover:shadow hover:shadow-mainColor hover:text-white"
          }`}
      >
        {children}
      </button>
    </>
  );
}
