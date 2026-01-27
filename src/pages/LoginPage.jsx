import axios from 'axios';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import UiComponant from '../components/Authentication/UiComponant';

import Herosection from '../components/HeroSection/Herosection';
import Footer from '../components/Footer/Footer';

export default function LoginPage() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const handleSubmit = async (values) => {
    const domain = 'https://bookstore.eraasoft.pro/api';
    const endPoint = '/login';
    const url = domain + endPoint;

    try {
      const res = await axios.post(url, values);
      console.log(res.data);
    } catch (error) {
      console.log(error.response?.data || error);
    }
  };

  return (
    <>
      <div className='h-84.5'>
        <Herosection />
      </div>
      <div className="w-full bg-[#F5F5F5] flex flex-col items-center justify-center gap-10 font-open">
        <div className="flex justify-center w-full">
          <h1 className="font-semibold font-open text-mainColor">Welcome Back!</h1>
        </div>
        {/* logic componant (formik) */}
        <div className='flex flex-col  '>
          <Formik initialValues={{ email: '', password: '' }} onSubmit={(values) => { handleSubmit(values) }}>
            {/* ui componant  */}
            <UiComponant email={"email"} password={"password"} />
          </Formik>
        </div>
        <Footer />
      </div>
    </>
  );
}