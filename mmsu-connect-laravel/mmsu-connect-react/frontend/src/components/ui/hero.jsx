import {useState} from "react"
import Bg from "./bg";
import api from "../../api"
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import { LogOut } from "lucide-react";
import { LogIn } from "lucide-react";

const Hero = ({route, method}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const name = method === "login" ? "Login" : "Sign Up"

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try{
            const res = await api.post(route, {username, password})
            if(method === "login"){
                console.log(res.data.access)
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            }else{
                navigate("/login")
            }
        }catch(error){
            alert(error)
        }finally{
            setLoading(false)
        }
    }

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
                                        placeholder="Email"
                                        value = {username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value = {password}
                                        onChange={(e) => setPassword(e.target.value)}
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
                                    <button className="btn btn-success tesx-bg-white" onClick={handleSubmit}>
                                        {/* {method == "login" ? 
                                            <LogIn className="mr-2 h-4 w-4" /> : <LogOut className="mr-2 h-4 w-4" />
                                        } */}
                                        {name}
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
