const Aboutcard = () => {
    return (
        <>
            <div className="card text-6xl text-center font-bold pt-14 ">
                <h1>Welcome to MMSU Connects</h1>
            </div>

            <div className="card text-lg mt-6 text-center">
                <p>
                    Empowering students to achieve their fullest potential
                    through academic excellence, <br />
                    personal growth, and community involvement
                </p>
            </div>

            <div className="carousel w-full justify-center my-14">
                <div className="carousel-item ">
                    <img
                        src="https://images.pexels.com/photos/6147365/pexels-photo-6147365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="w-[900px] rounded-ss-[200px] rounded-br-[200px]"
                    />
                </div>
            </div>

            <div className="card flex flex-row justify-center gap-[500px]">
                <div className="mission">
                    <div className="text-4xl font-bold mb-2">
                        <h3>Mission</h3>
                    </div>
                    <p className="text-lg">pogi ni adaja</p>
                </div>

                <div className="values ">
                    <div className="text-4xl font-bold mb-2">
                        <h3>Values</h3>
                    </div>
                    <div className="bg-green-100">
                        <div className="collapse ">
                            <input
                                type="radio"
                                name="my-accordion-1"
                                defaultChecked
                            />
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse ">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse ">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Aboutcard;
