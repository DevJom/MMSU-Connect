import Anouncecard from "../components/ui/anouncecard";
import Carousel from "../components/ui/carousel";
import Footer from "../components/ui/footer";

const Anouncement = () => {
    return (
        <div className="min-h-screen bg-base-200 flex flex-col justify-center items-center">
            <Carousel />

            <div className="flex-1 flex ">
                <div className="text-center">
                    <Anouncecard />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Anouncement;
