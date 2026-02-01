import RightComponentBookCard from "./RightComponentBookCard";

export default function MainBookCard() {
  return (
    <div className="flex gap-10 p-10 bg-white justify-between w-fit text-[#222222] ">
      {/* left */}
      <div className="">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw51g1gMBrZN3FbN17flaY_YSYmTMGuudh3Q&s" />
      </div>
      {/* right */}
      <RightComponentBookCard/>
    </div>
  );
}