import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Herosection from "../components/HeroSection/Herosection";
import UiComponant from "../components/Authentication/UiComponant";
import BtnType from "../components/Authentication/BtnType";
import { LiaPenAltSolid } from "react-icons/lia";
import Button from "../components/ui/Button";
import toast from "react-hot-toast";
import { profileApi } from "../api";

const profileSchema = Yup.object({
  firstname: Yup.string().min(2, "First name is too short"),
  lastname: Yup.string().min(2, "Last name is too short"),
  email: Yup.string().email("Invalid email"),
  number: Yup.string(),
  address: Yup.string(),
});

export default function Profile() {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    address: "",
    image: "",
  });

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const res = await profileApi.getProfile();
      const data = res.data?.data || {};
      setProfile({
        firstname: data.first_name || "",
        lastname: data.last_name || "",
        email: data.email || "",
        number: data.phone || "",
        address: data.address || "",
        image: data.image || "",
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleUpdateProfile = async (values) => {
    const data = {
      first_name: values.firstname,
      last_name: values.lastname,
      email: values.email,
      phone: values.number,
      address: values.address,
    };

    try {
      const res = await profileApi.updateProfile(data);
      toast.success(res.data?.message || "Profile updated successfully");
      await fetchProfile();
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to update profile");
    }
  };

  return (
    <>
      <Herosection h="h-84.5" />
      <div className="flex items-center justify-center">
        <div className=" container flex items-center justify-center flex-col relative h-screen">
          <div className="w-45 h-45 rounded-full absolute  -top-15">
            <img
              src={
                profile.image && profile.image !== "default"
                  ? profile.image
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkcqkUHsDulyGaMQk4mV7s9_d8-FW0x8ZOQ&s"
              }
              alt=""
              className="w-full rounded-full"
            />
          </div>
          <div className="relative">
            <Button
              isMainBtn={true}
              classn=" flex items-center justify-center rounded-full w-[33px] h-[33px] -top-20 -right-15  absolute  "
            >
              <LiaPenAltSolid />
            </Button>
          </div>

          {loading ? (
            <p className="text-center text-gray-500 py-8">Loading profile...</p>
          ) : (
            <Formik
              enableReinitialize
              initialValues={profile}
              validationSchema={profileSchema}
              onSubmit={handleUpdateProfile}
            >
              <Form className=" ">
                <div className="bg-[#FFFFFF] flex flex-col gap-4 rounded-xl mt-9 p-7">
                  <div>
                    <h1 className="text-[20px] text-[#222222] font-semibold text-center mt-7">
                      General information
                    </h1>
                  </div>
                  <div className="mt-7 flex flex-col gap-4 ">
                    <div className="w-184 grid grid-cols-2 gap-5 ">
                      <UiComponant
                        name="firstname"
                        label="First Name"
                        placeholder="John"
                        type="text"
                      />
                      <UiComponant
                        name="lastname"
                        label="Last Name"
                        placeholder="Smith"
                        type="text"
                      />
                    </div>
                    <UiComponant
                      name="email"
                      label="Email"
                      placeholder="example@gmail.com"
                      type="email"
                    />
                    <UiComponant
                      name="number"
                      label="Phone number"
                      placeholder="123456789"
                      type="text"
                    />
                    <UiComponant
                      name="address"
                      label="Address"
                      placeholder="Maadi, Cairo, Egypt."
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <BtnType lable="Update information" />
                </div>
              </Form>
            </Formik>
          )}
        </div>
      </div>
    </>
  );
}
