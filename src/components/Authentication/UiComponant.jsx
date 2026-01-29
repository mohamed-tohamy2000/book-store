import { ErrorMessage, Field } from 'formik';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function UiComponant({ name, label, placeholder, type }) {
  const [showPassword, setShowPassword] = useState(false)
   const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-1 font-semibold text-[16px] text-[#222222] ">
      <label >{label}</label>
      <div className='relative'>
        <Field

          name={name}
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          className="text-sm text-gray-950 w-full border-[#22222233] p-3 rounded-lg border outline-none focus:border-mainColor"
        />
         {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}

      </div>

      <ErrorMessage name={name} component="p" className="text-red-500 text-sm" />
    </div>
  );
}