export const LoginPage = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                <div className="card-body">
                    <label className="card-title  text-green-700 font-bold">
                        Email
                    </label>
                    <div className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Stundent ID"
                        />
                    </div>
                    <label className="card-title  text-green-700 font-bold">
                        Password
                    </label>
                    <div className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Enter Password"
                        />
                    </div>
                    <label className="forgot_password-remember_me flex">
                        <div className="forgot_password">
                            <a
                                href="#"
                                className="label-text-alt link link-hover text-green-700"
                            >
                                Forgot password?
                            </a>
                        </div>
                    </label>

                    <div className="card-actions justify-center">
                        <button className="btn btn-success text-gray-50">
                            Login
                        </button>
                    </div>
                </div>
            </div>

            <div className="hero-content flex-col lg:flex-row-reverse  text-green-700">
                <div className="text-center lg:text-right">
                    <h1 className="text-7xl font-bold">Login now!</h1>
                    <p className="py-6 ml">
                        Explore the MMSU Connect website to discover a wealth of
                        resources and opportunities!
                        <br /> Dive into the latest news, events, and services
                        offered by Mariano Marcos State University.
                        <br />
                        Stay connected and make the most of your university
                        experience!
                    </p>
                </div>
            </div>
        </div>
    );
};
