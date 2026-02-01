import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";


export default function Mainlayout() {
    return (
        <div className="font-open min-h-screen flex flex-col">
            <Navbar />

            <div className="grow flex flex-col bg-[#F5F5F5] w-full">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
