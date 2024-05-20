export const LoginPage = () => {
    return (
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

    );
};
