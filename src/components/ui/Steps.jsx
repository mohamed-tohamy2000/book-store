import React from "react";
import { FaCheck } from "react-icons/fa";
export default function Steps({ steps }) {
  return (
    <>
      <div className=" w-full ">
        <div className=" flex   ">
          {steps.map((step, index) => {
            const isCompleted = step.completed;

            return (
              <div key={step.id} className="flex items-center w-full ">
                {/* Step */}
                <div className="flex flex-col items-center">
                  {/* Circle */}
                  <div
                    className={`w-11 h-11 flex items-center justify-center rounded-full border text-sm font-semibold
              ${
                isCompleted
                  ? "border-[#D9176C] text-white bg-[#D9176C]"
                  : "border-gray-300 text-gray-400"
              }`}
                  >
                    {isCompleted ? (
                      <FaCheck size={14} />
                    ) : (
                      <FaCheck size={14} />
                    )}
                  </div>

            
                  
                </div>

                {/* Line */}
                {index !== steps.length - 1 && (
                  <div className="flex-1 h-px mx-3 relative bg-gray-200">
                    <div
                      className={`absolute inset-0 ${
                        isCompleted ? "bg-[#D9176C]" : "bg-gray-300"
                      }`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
