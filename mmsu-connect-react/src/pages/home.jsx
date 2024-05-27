// import SideCard from "../components/ui/sideCard";
import Sidebar from "../components/ui/sidebar";
import Createpost from "../components/ui/createpost";
import Navbar from "../navbar";
import Postcardv2 from "../components/ui/postcardv2";
import Sidebarv2 from "../components/ui/sidebarv2";
// import Navbarv2 from "../navbarv2";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Navbarv2/> */}
      <div className="flex h-screen bg-base-200 gap-4 scrollbar-hide">
        <div className="w-1/4  flex-initial overflow-auto scrollbar-hide">
          {/* <SideCard /> */}
          <Sidebarv2 />
        </div>
        <div className="w-2/4 grow flex-initial overflow-auto scrollbar-hide ">
          <div className="flex justify-center item-center">
            <div className="mt-4 mb-4">
              <Createpost />
            </div>
          </div>

          <div className="flex justify-center items-center flex-col">
            <div className="">
              <Postcardv2/>
            </div>
            <div className="">
              <Postcardv2/>
            </div>
            <div className="">
              <Postcardv2/>
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
