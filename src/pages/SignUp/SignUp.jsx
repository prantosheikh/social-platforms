import { Link } from "react-router-dom";
import { useState } from "react";
import Select from "react-select";
import { FaFacebookF, } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const options = [
    { value: "Female", label: "Female" },
    { value: "Male", label: "Male" },
    { value: "Custom", label: "Custom" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="">
      <div className="hero ">
        <div className="hero-content w-full min-h-screen flex-col gap-20 lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-4/6  shadow-2xl bg-base-100">
            <div className="card-body ">
              <h1 className="text-3xl font-semibold">
                Create your Socail Account.
              </h1>
              <p>
                Already member?{" "}
                <Link to='/login' className="text-blue-600 font-bold">Login here.</Link>
              </p>
              <div className="flex gap-6 justify-around w-full">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="PhotoURL"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>

              <div className="flex gap-6 justify-around w-full">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Date of birth</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-1/2 mt-2">
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                </div>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type=""
                  placeholder="Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="bg-blue-700 rounded-xl border  w-100  text-white font-semibold py-4"
                >
                  Login
                </button>
              </div>
              <div className="divider">OR</div> 
              <div className="flex justify-around items-center text-center gap-5 mt-2">
                <button
                  type="submit"
                  className="bg-primary py-1 rounded-2xl border w-1/2 text-white"
                >
                  <FcGoogle className="text-white ms-24 lg:ms-44 text-xl my-1 me-4" />
                  Google
                </button>
               
                <button className=" bg-blue-900 py-1  rounded-2xl border  w-1/2  text-white ">
                  <FaFacebookF className=" rounded-2xl ms-24 text-xl text-white lg:ms-44 my-1" /> Facebook
                </button>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default SignUp;
