import Createpost from "../components/ui/createpost";
import HomeCard from "../components/ui/homeCard";
import SideCard from "../components/ui/sideCard";
import Sidebar from "../components/ui/sidebar";

const About = () => {
    return (
        <>
            <div className=" bg-base-200 flex  gap-4 ">
                <div className="w-[400px] flex-initial sticky top-0 z-[999]">
                    <SideCard></SideCard>
                </div>

                <div className="grow flex-initial">
                    <div className="m-4">
                        <Createpost></Createpost>
                    </div>
                    <HomeCard></HomeCard>
                </div>

                <div className="w-auto flex-initial">
                    <Sidebar />
                </div>
            </div>
        </>
    );
};

export default About;
