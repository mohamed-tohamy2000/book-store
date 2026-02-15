import SummaryCard from "./SummaryCard";
import PromoCode from "./PromoCode";

export default function PaymentSummary({
  subtotal,
  tax,
  shipping,
  total,
}) {
  const handleApplyPromo = (code) => {
    console.log("Promo Applied:", code);
    // بعدين تربطه ب API
  };

  return (
   
      
      <div className="flex w-342.75 h-113.75 bg-[#3B2F4A1A] justify-center mb-28.75  p-20  gap-39">
        
        {/* LEFT SIDE */}
        <div className=" w-129 h-68.75 gap-20">
          <h2 className="text-2xl text-gray-600 font-bold mb-3">
            Payment Summary
          </h2>

          <p className="text-gray-500 mb-10 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.
          </p>

          <PromoCode onApply={handleApplyPromo} />
        </div>

        {/* RIGHT SIDE */}
        <SummaryCard
          subtotal={subtotal}
          tax={tax}
          shipping={shipping}
          total={total}
        />

      </div>

    
  );
}
