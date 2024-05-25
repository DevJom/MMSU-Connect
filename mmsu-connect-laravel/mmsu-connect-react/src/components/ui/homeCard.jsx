const HomeCard = () => {
    return (
        <>
            <div className=" min-h-screen flex justify-around flex-col lg:flex-row">
                <div className="post w-full">
                    <div className="card lg:card-side bg-base-100 shadow-xl w-auto h-[250px]">
                        <figure className="w-full">
                            <img
                                className="w-full h-full object-cover"
                                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                                alt="Album"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Post Title</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeCard;
