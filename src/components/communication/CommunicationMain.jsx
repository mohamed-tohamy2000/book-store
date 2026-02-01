import bg from "../../assets/images/sectionlogo/Background.png";
import CommunicationLeft from "./CommunicationLeft";
import CommunicationRight from "./CommunicationRight";

export default function CommunicationMain() {
    return (
        <>
            <div
                className="w-full p-3 bg-cover bg-[#3B2F4A]"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="flex items-center justify-center">
                    <div className="container grid grid-cols-2 h-full  gap-80">
                        <div className=" flex h-full p-5 mt-8">
                            <CommunicationLeft />
                        </div>
                        <div className=" flex ">
                            <CommunicationRight />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
