import OurMission from "../components/aboutus/OurMission";
import CommunicationMain from "../components/communication/CommunicationMain";
import Herosection from "../components/HeroSection/Herosection";
import Assemble from "../components/sectionhome/Assemble";

export default function AboutusPage() {
  return (
    <>
      <Herosection h="h-[804px]" showSearch={false} />
      <div>
        <div className="container  m-auto">
          <OurMission />
        </div>
        <CommunicationMain />
      </div>
      <div className="bg-[#F5F5F5] flex justify-center items-center">
        <Assemble />
      </div>
    </>
  );
}
