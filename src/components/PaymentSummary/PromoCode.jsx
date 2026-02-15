import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function PromoCode({ onApply }) {
  const validationSchema = Yup.object({
    promo: Yup.string()
      .trim()
      .required("Promo code is required")
      .min(3, "Promo code must be at least 3 characters"),
  });

  return (
    <div>
      <p className="text-sm text-gray-600 mb-3">
        Have a discount code?
      </p>

      <Formik
        initialValues={{ promo: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onApply(values.promo);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="flex text-gray-400 gap-3">
              <Field
                name="promo"
                type="text"
                placeholder="Enter Promo Code"
                className={`flex-1 border rounded-lg px-4 py-2 outline-none
                ${
                  errors.promo && touched.promo
                    ? "border-red-500"
                    : "focus:ring-2 focus:ring-pink-500"
                }`}
              />

              <button
                type="submit"
                className="bg-gray-700 text-white px-6 rounded-lg"
              >
                Apply
              </button>
            </div>

            <ErrorMessage
              name="promo"
              component="p"
              className="text-red-500 text-sm mt-2"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
