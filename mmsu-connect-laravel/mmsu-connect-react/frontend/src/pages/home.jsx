import Post from "../components/ui/post";

const home = () => {
    return (
        <>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">HOME</h1>
                    
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <Post className="item-center"></Post>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>

        
        </>
    );
};

export default home;
