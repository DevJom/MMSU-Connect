

export const LoginPage = () =>{
    return(
        <>
        {/* start navbar*/}
        
        <div className="navbar bg-green-800">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                    <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>News</a></li>
                            <li><a>Events</a></li>
                             <li><a>Announcements</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <a className="btn btn-ghost text-xl text-gray-50 ">MMSU Connect</a>
        </div>


        <div className="navbar-center hidden lg:flex  text-gray-50 text-xl">
            <ul className="menu menu-horizontal px-1">
                <li><a>About</a></li>
                <li><a>Contact us</a></li>
                <li>
                     <details>
                        <summary>Gazzete</summary>
                        <ul className="p-3 w-36 bg-green-700">
                            <li><a>News</a></li>
                            <li><a>Events</a></li>
                             <li><a>Announcements</a></li>
                        </ul>
                        </details>
                </li>   
            </ul>
        </div>
        <div className="navbar-end pr-10">
            <a className="btn btn-ghost  text-gray-50 text-xl">Register</a>
        </div>
        </div>

        {/* End navbar*/}

        {/* start Login*/}
        <div className="flex h-screen items-center justify-center text-green-700">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Email</h2>
                    <label className="input input-bordered flex items-center gap-2"><input type="text" className="grow" placeholder="Stundent ID" /></label>
                    <h2 className="card-title">Password</h2>
                    <label className="input input-bordered flex items-center gap-2"><input type="text" className="grow" placeholder="Enter Password" /></label>
                    <div className="forgot_password-remember_me flex">
                        <div className="forgot_password">
                            <a href="#">Forgot Password?</a>
                        </div>                        
                    </div>
 
                    
                    <div className="card-actions justify-center">
                        <button className="btn btn-success text-gray-50">Login</button>
                    </div>
                </div>
                
            </div>
        </div>
        {/* End Login*/}
        
        {/* start footer*/}
        <footer className="footer grid-rows-1 pl-80 pt-10 pb-10  text-lg bg-green-800 text-gray-50">
            <nav>
                <h6 className="footer-title">Other Links</h6> 
                <a className="link link-hover">MMSU Opportunities</a>
                <a className="link link-hover">Downloads</a>
                <a className="link link-hover">Publication</a>
                <a className="link link-hover">Videos</a>
                <a className="link link-hover">Gallery</a>
            </nav> 

            <nav>
                <h6 className="footer-title">Socials</h6> 
                <a className="link link-hover">MMSU - Authorize Page</a>
                <a className="link link-hover">MMSU Library System</a>
                <a className="link link-hover">American Corner</a>
            </nav> 

            <nav>
                <h6 className="footer-title">Quick Links</h6> 
                <a className="link link-hover">CFAT</a>
                <a className="link link-hover">Student Portal</a>
                <a className="link link-hover">MMSU Data Privacy Notice</a>
                <a className="link link-hover">MVLE</a>
            </nav> 
    
        </footer>
        {/* End footer*/}
        </>
    );
}