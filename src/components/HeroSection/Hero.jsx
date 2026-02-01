import img from "../../assets/images/img.png"
import Search from "../ui/Search"

export default function Hero({showSearch}) {
    return (
        <div className="relative h-full bg-cover bg-center " style={{ backgroundImage: `url(${img})` }}>
            <div className="absolute inset-0 bg-black/60 flex justify-center items-center">
             {showSearch === true ? (
          <Search isMainBtn={true} width={"fit"} />
        ) : showSearch === false ? (
          <div className="text-white text-center w-163">
            <h1 className="text-[48px] font-bold">About Bookshop</h1>
            <p className="text-[24px] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
          </div>
        ) : null}
            </div>
            {

            }
            
        </div>
    )
}