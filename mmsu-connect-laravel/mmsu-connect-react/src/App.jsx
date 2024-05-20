import { HomeNav } from "./components/HomeNav";
import { Footer } from "./components/footer";
import Hero from "./components/hero";

function App() {
    return (
        <>
            <div className="sticky top-0 z-[999]">
                <HomeNav />
            </div>

            <Hero />
            <Footer />
        </>
    );
}

export default App;
