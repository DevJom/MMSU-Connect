import SideCard from "../components/ui/sideCard";
import PostCard from "../components/ui/postCard";
import Sidebar from "../components/ui/sidebar";
import Createpost from "../components/ui/createpost";

const home = () => {
    return (
        <>
            <div className=" bg-base-200 flex  gap-10 ">
                <div className="w-[400px] ml-10 flex-initial sticky top-0 z-[999]">
                    <SideCard></SideCard>
                </div>

                <div className="grow flex-initial">
                    <div className="mt-4 mb-4">
                        <Createpost />
                    </div>

                    <PostCard></PostCard>
                </div>

                <div className="w-auto flex-initial">
                    <Sidebar />
                </div>
            </div>
        </>
    );
};

export default home;
