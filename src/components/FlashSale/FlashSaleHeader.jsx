const FlashSaleHeader = ({ title, description, time }) => {
  return (
    <div className="flex justify-between items-center mb-12 px-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-[26px] font-bold leading-[100%] text-[#222222]">
          {title}
        </h2>
        <p className="max-w-129 text-[#22222280] font-['Open_Sans'] font-normal text-[16px] leading-[140%]">
          {description}
        </p>
      </div>
      {/* صورة الدائرة أو الوقت */}
      <img
        src={time}
        alt="Timer"
        className="w-27.5 h-27.5 object-contain"
      />
    </div>
  );
};

export default FlashSaleHeader;