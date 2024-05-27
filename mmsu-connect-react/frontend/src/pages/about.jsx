import Aboutcard from "../components/ui/aboutcard";
import Footer from "../components/ui/footer";
import Navbar from "../navbar";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-base-200">
        <Aboutcard />
      </div>

      <Footer />
    </>
  );
};

export default About;
