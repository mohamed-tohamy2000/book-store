import axios from 'axios';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import UiComponant from '../components/Authentication/UiComponant';
import SoBtn from '../components/Authentication/SoBtn';
import toast, { Toaster } from 'react-hot-toast';

export default function LoginPage() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (values) => {
    const url = 'https://bookstore.eraasoft.pro/api/login';

    try {
      const res = await axios.post(url, values);
      console.log(res.data.message);
      toast.success(res.data.message)
      navigate("/");

    } catch (error) {
     toast.error(error.response?.data?.message) ;
      
    }
  };

  return (
    <div className="w-full bg-[#F5F5F5] flex flex-col items-center justify-center gap-10 font-open pt-3 ">
      <h1 className="font-semibold text-mainColor text-2xl">Welcome Back!</h1>

      <div className="flex flex-col w-full items-center">
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="w-200 p-4   flex flex-col gap-6">
            <UiComponant name="email" label="Email" placeholder="example@gmail.com"  type={"email"}/>
            <UiComponant name="password" label="Password" placeholder="Enter password" type={"password"}/>
            <SoBtn p="Don't have an account?" to={"/signup"} ptow=" Signup" ask="Forget password?" stet="Remember me"  lable={"Login"} />
          </Form>
        </Formik>
      </div>
    </div>
  );
}