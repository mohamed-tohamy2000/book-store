import MainRecomendedCard from "./MainRecomendedCard";

export default function SectionRecomendedCard() {
  return (
    <div className=" text-[#222222] flex flex-col gap-10 w-full text-[26px] font-bold bg-backGrond justify-center">
      <h3>Recomended For You</h3>
      <div className="flex gap- w-full justify-between">
        <MainRecomendedCard />
        <MainRecomendedCard />
      </div>
    </div>
  );
}
