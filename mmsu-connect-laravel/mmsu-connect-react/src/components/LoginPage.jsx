
export const LoginPage = () =>{
    return(
        <>
            {/* start navbar*/}
            
            <div className="navbar bg-white p-8 border-y-4  border-y-amber-400 scrol">
                <div className="navbar-start ">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            <li><a>ABOUT</a></li>
                            <li><a>CONTACT US</a></li>
                            <li>
                                <a>GAZZETE</a>
                                <ul className="p-2">
                                    <li><a>NEWS</a></li>
                                    <li><a>EVENTS</a></li>
                                    <li><a>ANNOUNCEMENTS</a></li>
                                </ul>
                            </li>
                            <li><a href="#">REGISTER</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-4xl text-green-700 font-bold">MMSU Connect</a>
                </div>


                <div className="navbar-center hidden lg:flex text-green-700">
                    <ul className="menu menu-horizontal px-1  text-sm font-bold">
                        <li><a>ABOUT</a></li>
                        <li><a>CONTACT US</a></li>
                        <li>
                            <details>
                                <summary>GAZZETE</summary>
                                <ul className="p-3 w-48 bg-white">
                                    <li><a>NEWS</a></li>
                                    <li><a>EVENTS</a></li>
                                    <li><a>ANNOUNCEMENTS</a></li>
                                </ul>
                                </details>
                        </li>   
                    </ul>
                </div>
                <div className="navbar-end pr-10 lg:">
                    <a className="btn btn-ghost hidden lg:flex text-green-700 text-xl font-bold">Register</a>
                </div>
                </div>

                {/* End navbar */}

                {/* start Login*/}
                
                <div className="flex h-screen items-center justify-center">
                    
                    <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                        <div className="card-body">
                            <label className="card-title  text-green-700 font-bold">Email</label>
                            <div className="input input-bordered flex items-center gap-2"><input type="text" className="grow" placeholder="Stundent ID" /></div>
                            <label className="card-title  text-green-700 font-bold">Password</label>
                            <div className="input input-bordered flex items-center gap-2"><input type="text" className="grow" placeholder="Enter Password" /></div>
                            <label className="forgot_password-remember_me flex">
                                <div className="forgot_password">
                                    <a href="#" className="label-text-alt link link-hover text-green-700">Forgot password?</a>
                                </div>                        
                            </label>
        
                            
                            <div className="card-actions justify-center">
                                <button className="btn btn-success text-gray-50">Login</button>
                            </div>
                        </div>
                    </div>

                    <div className="hero-content flex-col lg:flex-row-reverse  text-green-700">
                        <div className="text-center lg:text-right">
                            <h1 className="text-7xl font-bold">Login now!</h1>
                            <p className="py-6 ml">Explore the MMSU Connect website to discover a wealth of resources and opportunities! 
                            <br/> Dive into the latest news, events, and services offered by Mariano Marcos State University.
                            <br/>Stay connected and make the most of your university experience!</p>
                            </div>
                        </div>
                </div>
                {/* End Login*/}
                
                {/* start footer*/}
                <footer className="footer grid-rows-1 pl-80 pt-10 pb-10  text-lg bg-white text-green-700 border-t-4  border-t-amber-400 scrol">
                    <nav>
                        <h6 className="footer-title font-bold">Other Links</h6> 
                        <a className="link link-hover ">MMSU Opportunities</a>
                        <a className="link link-hover">Downloads</a>
                        <a className="link link-hover">Publication</a>
                        <a className="link link-hover">Videos</a>
                        <a className="link link-hover">Gallery</a>
                    </nav> 

                    <nav>
                        <h6 className="footer-title font-bold">Socials</h6> 
                        <a className="link link-hover">MMSU - Authorize Page</a>
                        <a className="link link-hover">MMSU Library System</a>
                        <a className="link link-hover">American Corner</a>
                    </nav> 

                    <nav>
                        <h6 className="footer-title font-bold">Quick Links</h6> 
                        <a className="link link-hover">CFAT</a>
                        <a className="link link-hover">Student Portal</a>
                        <a className="link link-hover">MMSU Data Privacy Notice</a>
                        <a className="link link-hover">MVLE</a>
                    </nav> 
            
                </footer>
                {/* End footer*/}
            <div/>
        </>
    );
}