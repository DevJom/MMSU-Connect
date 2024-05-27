import Aboutcard from "../components/ui/aboutcard";
import Navbar from "../navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-base-200">
        <Aboutcard />
      </div>
      <div className=" min-h-screen bg-base-200"></div>
    </>
  );
};

export default About;
