import { HiOutlineMail } from "react-icons/hi";
import { RxPerson } from "react-icons/rx";
import { LuPencil } from "react-icons/lu";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BtnType from "../Authentication/BtnType";
import { contactsApi } from "../../api";
import toast from "react-hot-toast";

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Name is too short").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().min(3, "Subject is too short").required("Subject is required"),
  message: Yup.string().min(5, "Message is too short").required("Message is required"),
});

export default function CommunicationLeft() {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const res = await contactsApi.sendMessage(values);
      toast.success(res.data?.message || "Message sent successfully");
      resetForm();
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to send message");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w- flex flex-col gap-15">
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-[40px]">Have a Questions? Get in Touch</h3>
        <p className="w-148 text-[#FFFFFF80] text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.
          Aliquam in justo varius, sagittis neque ut, malesuada leo.
        </p>
      </div>

      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="relative w-full flex items-center">
                  <div className="absolute left-4 text-[#FFFFFF80]">
                    <RxPerson size={20} />
                  </div>
                  <Field
                    name="name"
                    type="text"
                    className="w-full border border-[#FFFFFF33] bg-transparent rounded-lg p-4 pl-12 placeholder:text-[#FFFFFF80] text-white outline-none focus:border-white transition-colors"
                    placeholder="Name"
                  />
                </div>
                <ErrorMessage name="name" component="p" className="text-red-300 text-sm mt-1" />
              </div>

              <div>
                <div className="relative w-full flex items-center">
                  <div className="absolute left-4 text-[#FFFFFF80]">
                    <HiOutlineMail size={20} />
                  </div>
                  <Field
                    name="email"
                    type="text"
                    className="w-full border border-[#FFFFFF33] bg-transparent rounded-lg p-4 pl-12 placeholder:text-[#FFFFFF80] text-white outline-none focus:border-white transition-colors"
                    placeholder="Email Address"
                  />
                </div>
                <ErrorMessage name="email" component="p" className="text-red-300 text-sm mt-1" />
              </div>
            </div>

            <div>
              <div className="relative w-full flex items-center">
                <div className="absolute left-4 text-[#FFFFFF80]">
                  <LuPencil size={20} />
                </div>
                <Field
                  name="subject"
                  type="text"
                  className="w-full border border-[#FFFFFF33] bg-transparent rounded-lg p-4 pl-12 placeholder:text-[#FFFFFF80] text-white outline-none focus:border-white transition-colors"
                  placeholder="Subject"
                />
              </div>
              <ErrorMessage name="subject" component="p" className="text-red-300 text-sm mt-1" />
            </div>

            <div>
              <Field
                as="textarea"
                name="message"
                rows="4"
                className="w-full border border-[#FFFFFF33] bg-transparent rounded-lg p-4 placeholder:text-[#FFFFFF80] text-white outline-none focus:border-white transition-colors"
                placeholder="Your Message"
              />
              <ErrorMessage name="message" component="p" className="text-red-300 text-sm mt-1" />
            </div>

            <BtnType lable={isSubmitting ? "Sending..." : "Send Message"} disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
}
