import React from "react";
import Collapse from "./collapse";

const Sidebar = () => {
    const students = [];
    const teachers = [];
    const departments = [];
    const colleges = [];

    for (let index = 0; index < 5; index++) {
        students.push(
            <div key={index} className="flex items-center space-x-4 ">
                <div className="avatar online">
                    <div className="w-8 rounded-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            alt={`Student ${index + 1}`}
                        />
                    </div>
                </div>
                <div>Student {index + 1}</div>
            </div>
        );
        teachers.push(
            <div key={index + 5}>
                {" "}
                <div key={index} className="flex items-center space-x-4">
                    <div className="avatar online">
                        <div className="w-8 rounded-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                alt={`Student ${index + 1}`}
                            />
                        </div>
                    </div>
                    <div>Student {index + 1}</div>
                </div>{" "}
            </div>
        );
        departments.push(
            <div key={index + 10}>
                {" "}
                <div key={index} className="flex items-center space-x-4">
                    <div className="avatar online">
                        <div className="w-8 rounded-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                alt={`Student ${index + 1}`}
                            />
                        </div>
                    </div>
                    <div>Student {index + 1}</div>
                </div>
            </div>
        );
        colleges.push(
            <div key={index + 15}>
                {" "}
                <div key={index} className="flex items-center space-x-4">
                    <div className="avatar online">
                        <div className="w-8 rounded-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                alt={`Student ${index + 1}`}
                            />
                        </div>
                    </div>
                    <div>Student {index + 1}</div>
                </div>{" "}
            </div>
        );
    }

    return (
        <div className="drawer lg:drawer-open h-">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu w-80 min-h-full bg-base-100">
                    <Collapse title="Student" users={students} />
                    <div className="divider"></div>
                    <Collapse title="Teacher" users={teachers} />
                    <div className="divider"></div>
                    <Collapse title="Department" users={departments} />
                    <div className="divider"></div>
                    <Collapse title="College" users={colleges} />
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
