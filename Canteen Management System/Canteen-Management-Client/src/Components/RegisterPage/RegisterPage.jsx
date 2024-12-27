import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Axios/UseAxiosPublic";

const RegisterPage = () => {
  const image_hosting_key = "6fbc3358bbb1a92b78e2dee0f5ca1b94";
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const { userSingUp, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const AxiosPublic = UseAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data.image);
    // access the form data
    const image = { image: data.image[0] };
    const res = await AxiosPublic.post(image_hosting_api, image, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const photo = res.data.data.display_url;
    console.log(res.data.data.display_url);
    console.log(name, email, password, photo);

    // create user and update profiles
    userSingUp(email, password)
      .then((result) => {
        navigate(location.state ? location.state : "/");
        updateUserProfile(name, photo);
        console.log(result.user);
        console.log(email, name, photo);
        //post userinfo in database
        const date = new Date();
        const userInfo = { email, name, photo, date, role: "user" };
        console.log(date);

        AxiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
        });
        // new product created for server side here
        navigate("/");
        return toast.success("user created successfully");
      })
      .catch((error) => {
        console.log(error);
        return toast.error("user already exists");
      });
  };

  // const handleUserSingUp = (e) => {
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const email = e.target.email.value;
  //   const img = e.target.image.value;
  //   const password = e.target.password.value;

  //   console.log(name, img, email, password);
  //validation
  // if (password.length < 6) {
  //   toast.error('Password must be al least 6 characters')
  //   return;
  // }

  // // creating a new user
  // userSingUp(email, password)
  //   .then(() => {
  //     updateUserProfile(name, img).then(() => {
  //       toast.success("User created successfully");
  //       navigate('/')
  //     });
  //   })
  //   .catch((error) => {
  //     toast.error(error.message);
  //   });

  // if (
  //   !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
  //     password
  //   )
  // ) {
  //   toast.error("Minimum six character, at least one latter and one number ");
  // } else {
  //     if (email) {
  //       userSingUp(email, password).then(() => {
  //         updateUserProfile(name, img).then(() => {
  //           toast.success("User created successfully");
  //           navigate("/");
  //         });
  //       });
  //     }
  //   // }
  // };
  return (
    <div className="hero min-h-screen bg-base-200 pb-20 mt-12">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left pt-10">
          <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold">
            Register now!
          </h1>
        </div>
        <div className="card flex-shrink-0 lg:w-[650px] md:w-[650px] w-[300px] max-w-sm shadow-2xl bg-base-100 mt-5">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                {...register("image")}
                type="file"
                placeholder="Enter your photo url"
                className="file-input file-input-bordered w-full max-w-xs my-5"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 p-0">
              <button
                className="btn bg-[#ee793d] text-white hover:bg-[#ec6926]"
                type="submit"
              >
                Register
              </button>
            </div>
            <label className="label">
              Have an account?
              <Link to="/login" className="label-text-alt link link-hover">
                Please Login
              </Link>
            </label>
            <SocialLogin></SocialLogin>
          </form>
          {/* <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form> */}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
