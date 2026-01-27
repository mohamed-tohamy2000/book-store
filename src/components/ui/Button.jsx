export default function Button({ children, width, isMainBtn }) {
    return (
        <>
            <button className={`w-${width} px-4 py-3 capitalize rounded-lg border border-mainColor
                ${isMainBtn ? 'bg-mainColor text-white hover:bg-white hover:text-mainColor' : 'bg-white text-mainColor hover:bg-mainColor hover:text-white'}
            `}>
                {children}
            </button>
        </>
    )
}