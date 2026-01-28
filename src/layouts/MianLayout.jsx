import { Outlet } from "react-router-dom";
import Herosection from "../components/HeroSection/Herosection";
import Footer from "../components//Footer/Footer"


export default function Mainlayout() {
    return (
        <div className="h-screen">
            <Herosection h="h-84.5" />
            <div className="flex justify-center bg-[#F5F5F5]">
                <div className=" container">
                    <Outlet />
                </div>

            </div>
            <Footer />
        </div>
    )
}