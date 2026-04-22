

export default function BtnType({ lable, ...props }) {
  return (
    <button
      type="submit"
      {...props}
      className="bg-mainColor p-4 rounded-lg text-white active:bg-[#8c1347] w-full mt-5"
    >
      {lable}
    </button>
  );
}
