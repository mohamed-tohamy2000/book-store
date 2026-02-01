export default function OurMission() {
    const OurMissionData = [
        { titel: "Quality Selection", btn: "View More" },
        { titel: "Exceptional Service", btn: "View More" },
        { titel: "Set Up Stores", btn: "Soon" },
    ];
    return (
        <>
            <div className="bg-backGrond text-[#222222] flex flex-col justify-center gap-20 items-center h-167  ">
                <h3 className="font-bold text-4xl">Our Mission</h3>
                <div className="flex flex-row gap-6">
                    {OurMissionData.map((el, index) => (
                        <div
                            key={index}
                            className="border border-[#22222233] flex flex-col rounded-xl p-6 gap-6 bg-white "
                        >
                            <h4 className="font-bold text-[22px]">{el.titel}</h4>
                            <p className="text-[#22222280] w-78 h-38.5">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                                rem commodi nam maiores. Incidunt in sit adipisci aperiam
                                doloremque autem sint, vel esse magnam eveniet expedita ducimus
                                nulla nostrum odit?
                            </p>
                            <span className="text-mainColor">{el.btn}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}