

export default function BtnBook({ children, isMainBtn, className }) {
    return (
        <>
            <button
                className={`${className} px-4 py-3 capitalize rounded-lg border 
          ${isMainBtn
                        ? "bg-[#D9176C80] text-white  border-[#D9176C80] hover:shadow "
                        : "bg-[#F5F5F5] text-[#222222] border-[#00000033] "
                    }`}
            >
                {children}
            </button>
        </>
    )
}
