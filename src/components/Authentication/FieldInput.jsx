import { Field } from "formik";

export default function FieldInput({ name, type, ...props }) {
  return (
    <Field
      name={name}
      type={type}
      {...props}
      className="text-sm text-center  text-gray-950 w-full border-[#22222233] p-3 rounded-lg border outline-none focus:border-mainColor"
    />
  );
}
