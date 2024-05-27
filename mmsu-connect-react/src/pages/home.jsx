import SideCard from "../components/ui/sideCard";
import PostCard from "../components/ui/postCard";
import Sidebar from "../components/ui/sidebar";
import Createpost from "../components/ui/createpost";
import Navbar from "../navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen bg-base-200 gap-4">
        <div className="w-1/4 ml-4 flex-initial overflow-auto scrollbar-hide">
          <SideCard />
        </div>
        <div className="w-2/4 grow flex-initial overflow-auto scrollbar-hide ">
          <div className="text-center"> {/* IPATINGAM MAN DETUY */}
            <div className="mt-4 mb-4 ">
              <Createpost />
            </div>
          </div>

          <div className="snap-proximity snap-y text-center">
            <div className="snap-center">
              <PostCard />
            </div>
            <div className="snap-center">
              <PostCard />
            </div>
            <div className="snap-center">
              <PostCard />
            </div>
          </div>
        </div>
        <div className="w-1/4 shrink flex-initial overflow-auto scrollbar-hide">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
