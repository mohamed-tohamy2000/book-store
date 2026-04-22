import { Link } from "react-router-dom";
import BtnType from "./BtnType";
import { Field } from "formik";

export default function SoBtn({ p, to, ptow, ask, askTo, stet, lable, name }) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          {stet ? (
            <>
              <Field name={name} type="checkbox" className="checkbox checkbox-error" />
              <span className="text-black">{stet}</span>
            </>
          ) : null}
        </div>
        {askTo ? (
          <Link to={askTo} className="text-mainColor active:text-[#8c1347]">
            {ask}
          </Link>
        ) : (
          <span className="text-mainColor active:text-[#8c1347]">{ask}</span>
        )}
      </div>
      <BtnType lable={lable} />

      <div className="mt-5">
        <p className="text-black font-semibold text-center ">
          {p}
          <Link to={to} className="text-mainColor">
            {" "}
            {ptow}
          </Link>
        </p>
      </div>
      <div className="text-[#00000080] w-full text-center my-8">or</div>
      <div className="flex flex-col gap-4">
        <button
          type="button"
          onClick={() => window.open("https://accounts.google.com/", "_blank")}
          className="flex justify-center gap-4 shadow-lg bg-white w-full rounded-lg font-normal text-[14px] text-black p-4"
        >
          <img
            className="h-5"
            src="https://s3-alpha.figma.com/hub/file/2729744958/2a5758d6-4edb-4047-87bb-e6b94dbbbab0-cover.png"
            alt=""
          />
          Login with Google
        </button>
        <button
          type="button"
          onClick={() => window.open("https://www.facebook.com/", "_blank")}
          className="flex justify-center gap-4 shadow-lg bg-white w-full rounded-lg font-normal text-[14px] text-black p-4"
        >
          <img
            className="h-5"
            src="https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338509_1280.png"
            alt=""
          />
          Login with Facebook
        </button>
      </div>
    </div>
  );
}
