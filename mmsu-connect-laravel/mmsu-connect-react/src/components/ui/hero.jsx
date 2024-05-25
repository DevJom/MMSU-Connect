import Bg from "./bg";
import { LogIn } from "lucide-react";

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <Bg></Bg>
                <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-6 m-4">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left w-[500px]">
                            <h1 className="text-5xl font-bold">Login!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat
                                fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id
                                nisi.
                            </p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                            <div className="card-body">
                                <div className="form-control">
                                    <input
                                        type="text"
                                        placeholder="email"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <input
                                        type="text"
                                        placeholder="password"
                                        className="input input-bordered"
                                    />
                                    <label className="label">
                                        <a
                                            href="#"
                                            className="label-text-alt link link-hover"
                                        >
                                            Forgot password?
                                        </a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <button className="btn btn-success tesx-bg-white">
                                        <LogIn className="mr-2 h-4 w-4" />
                                        Login
                                    </button>
                                    <label className="label label-text-alt text-center">
                                        <p className="inline">
                                            Dont have account?{" "}
                                            <a
                                                href="signup"
                                                className="label-text-alt link link-hover"
                                            >
                                                Signup
                                            </a>
                                        </p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
