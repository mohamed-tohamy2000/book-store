import img from "../../assets/images/img.png"
import Navbar from "../Navbar/Navbar"
export default function Herosection() {
  return (
    <>
    <Navbar/>
    <div className="relative h-full bg-cover bg-center -z-10" style={{ backgroundImage: `url(${img})` }}>
        <div className="absolute inset-0 bg-black/60"></div>
    </div>
    </>
  )
}