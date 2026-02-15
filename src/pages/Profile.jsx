import { Form, Formik } from "formik";
import Herosection from "../components/HeroSection/Herosection";
import UiComponant from "../components/Authentication/UiComponant";
import BtnType from "../components/Authentication/BtnType";
import { LiaPenAltSolid } from "react-icons/lia";
import Button from "../components/ui/Button";

export default function Profile() {


    return (
        <>
            <Herosection h="h-84.5" />
            <div className="flex items-center justify-center">
                <div className=" container flex items-center justify-center flex-col relative h-screen">
                    <div className="w-45 h-45 rounded-full absolute  -top-15" >
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkcqkUHsDulyGaMQk4mV7s9_d8-FW0x8ZOQ&s"
                            alt=""
                            className="w-full rounded-full"
                        />

                    </div >
                    <div className="relative">
                        <Button isMainBtn={true} classn=" flex items-center justify-center rounded-full w-[33px] h-[33px] -top-20 -right-15  absolute  " >
                            <LiaPenAltSolid />
                        </Button>

                    </div>

                    <Formik>
                        <Form className=" ">
                            <div className="bg-[#FFFFFF] flex flex-col gap-4 rounded-xl mt-9 p-7">
                                <div>
                                    <h1 className="text-[20px] text-[#222222] font-semibold text-center mt-7" >General information</h1>
                                </div>
                                <div className="mt-7 flex flex-col gap-4 ">
                                    <div className="w-184 grid grid-cols-2 gap-5 ">
                                        <UiComponant
                                            name="firstname"
                                            label="First Name"
                                            placeholder="John"
                                            type="firstname"
                                        />
                                        <UiComponant
                                            name="lastname"
                                            label="Last Name"
                                            placeholder="Smith"
                                            type="lastname"
                                        />
                                    </div>
                                    <UiComponant
                                        name="email"
                                        label="Email"
                                        placeholder="example@gmail.com"
                                        type="email"
                                    />
                                    <UiComponant
                                        name="number"
                                        label="Phone number"
                                        placeholder=" 123456789"
                                        type="text"
                                    />
                                    <UiComponant
                                        name="Address"
                                        label=" Address"
                                        placeholder=" Maadi, Cairo, Egypt."
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-center">

                                <BtnType btn="Update information" w={"w-[280px]"} />
                            </div>
                        </Form>
                    </Formik>

                </div>

            </div>
        </>
    )
}
