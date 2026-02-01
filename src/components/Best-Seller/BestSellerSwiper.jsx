import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import { useState, useEffect } from "react";

export default function BestSellerSwiper() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://bookstore.eraasoft.pro/api/home",
        );

        let dataHome = response.data.data.recommended;
        console.log(dataHome);
        setBooks(dataHome);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full flex gap-5">
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 500 }}
        modules={[Autoplay, FreeMode, Navigation]}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-43.25 h-65 rounded-xl bg-white "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-43.25 h-65 rounded-xl bg-white "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-43.25 h-65 rounded-xl bg-white "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-43.25 h-65 rounded-xl bg-white "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-43.25 h-65 rounded-xl bg-white "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-43.25 h-65 rounded-xl bg-white "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-43.25 h-65 rounded-xl bg-white "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-43.25 h-65 rounded-xl bg-white "></div>
        </SwiperSlide>
        

        {
          // books.map((book) => (
          //   <SwiperSlide key={book.bookId}>
          //     <div className="bg-white p-2 rounded-lg shadow-md">
          //       {/* ملحوظة: الـ API اللي بعته مفيش فيه لينك صورة (image)
          //             فأنا هفترض إن فيه field للصورة أو استبدله بـ placeholder */}
          //       <img
          //         src={book.image || "https://via.placeholder.com/150x200"}
          //         alt={book.bookName}
          //         className="w-full h-64 object-cover mb-2"
          //       />
          //       <h3 className="text-sm font-bold truncate">{book.bookName}</h3>
          //       <p className="text-xs text-gray-500">{book.author}</p>
          //       <div className="flex justify-between items-center mt-2">
          //         <span className="text-pink-600 font-bold">
          //           ${book.final_price.toFixed(2)}
          //         </span>
          //         {book.discount > 0 && (
          //           <span className="text-xs line-through text-gray-400">
          //             ${book.price}
          //           </span>
          //         )}
          //       </div>
          //     </div>
          //   </SwiperSlide>
          // ))
        }
      </Swiper>
    </div>
  );
}