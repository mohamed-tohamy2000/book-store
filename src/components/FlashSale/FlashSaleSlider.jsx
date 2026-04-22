import React, { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const FlashSaleSlider = ({ items, silider, onAddToCart }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const fallbackItems = Array.isArray(items) && items.length ? items : [1, 2, 3, 4];

  return (
    <div className="relative px-12">
      <button
        type="button"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 hover:bg-gray-50 transition-all"
        onClick={() => swiperRef?.slidePrev()}
      >
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={2}
        spaceBetween={24}
        modules={[Navigation]}
        className="rounded-xl"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {fallbackItems.map((item, index) => {
          const book = typeof item === "object" ? item : {};
          const image = book.image || book.cover || book.thumbnail || silider;
          const title = book.title || book.name || "Rich Dad And Poor Dad";
          const author = book.author || book.author_name || "Robert T. Kiyosaki";
          const price = Number(book.price || book.final_price || 30);
          const oldPrice = Number(book.price_before_discount || 45);
          const reviews = book.reviews_count || 180;

          return (
            <SwiperSlide key={book.id || index}>
              <div className="bg-[#3B334B] text-white p-5 rounded-2xl flex gap-5 relative group shadow-xl">
                <img src={image} className="w-43.75 h-60 rounded-lg" alt="book" />
                <div className="  flex-1 flex flex-col justify-between py-1 h-40">
                  <div>
                    <h3 className="text-[18px] font-bold leading-tight">{title}</h3>
                    <p className="text-gray-400 text-xs mt-1 italic">Author: {author}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-yellow-400 text-sm">????</span>
                      <span className="text-gray-400 text-[10px]">({reviews} Review)</span>
                    </div>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-gray-400 line-through text-xs">${oldPrice.toFixed(2)}</span>
                      <span className="text-xl font-bold">${price.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-[#524965] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#F59E0B] h-full w-[70%] rounded-full"></div>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-1">4 books left</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onAddToCart?.(book)}
                  className="absolute bottom-4 right-5 bg-[#D1295C] p-2.5 rounded-xl hover:scale-110 transition-transform"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button
        type="button"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 hover:bg-gray-50 transition-all"
        onClick={() => swiperRef?.slideNext()}
      >
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default FlashSaleSlider;
