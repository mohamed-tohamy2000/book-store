export default function InputField({ type, placeholder }) {
    return (
        <>
            <input type={type} placeholder={placeholder}
                className="border border-[#22222233] rounded-lg p-4 w-full placeholder:text-[#22222280]"
            />
        </>
    )
}