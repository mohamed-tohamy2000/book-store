import {
    HiOutlineLocationMarker,
    HiOutlinePhone,
    HiOutlineAnnotation,
} from "react-icons/hi";
export default function CommunicationRight() {
    const CommunicationRightData = [
        { icon: <HiOutlinePhone />, contant: "0123456789" },
        { icon: <HiOutlineAnnotation />, contant: "Example@gmail.com" },
        {
            icon: <HiOutlineLocationMarker />,
            contant:
                "adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,",
        },
    ];
    return (
        <div className=" h-50 gap-6 flex flex-col ">
            {CommunicationRightData.map((el, index) => (
                <div key={index} className="gap-4 flex items-center">
                    <div className="bg-white border border-[#FFFFFF33] rounded-lg p-3 w-fit text-mainColor text-3xl">
                        {el.icon}
                    </div>
                    <span className="w-62">{el.contant}</span>
                </div>
            ))}
        </div>
    );
}