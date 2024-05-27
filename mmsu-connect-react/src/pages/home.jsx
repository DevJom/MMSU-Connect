import SideCard from "../components/ui/sideCard";
import PostCard from "../components/ui/postCard";
import Sidebar from "../components/ui/sidebar";
import Createpost from "../components/ui/createpost";

const home = () => {
    return (
        <>
            <div className=" bg-base-200 flex  gap-10 ">
                <div className="w-[400px] ml-4 flex-initial">
                    <SideCard
                        title="Popular"
                        description="Pogi ni Gabriel Andrei Adajar"
                    ></SideCard>
                </div>

                <div className="grow flex-initial">
                    <div className="mt-4 mb-4">
                        <Createpost></Createpost>
                    </div>

                    <PostCard></PostCard>
                </div>

                <div className="shrink w-fit ">
                    <Sidebar />
                </div>
            </div>
        </>
    );
};

export default home;
