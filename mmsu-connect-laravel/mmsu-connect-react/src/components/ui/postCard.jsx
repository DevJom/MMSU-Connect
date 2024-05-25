const PostCard = () => {
    return (
        <>
            <button
                onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                }
            >
                <div className="flex justify-around flex-col lg:flex-row">
                    <div className="post w-full">
                        <div className=" card lg:card-side bg-base-100 shadow-xl w-auto h-[500px] ">
                            <figure className="w-full">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                                    alt="Album"
                                />
                            </figure>
                            <div className="card-body w-[600px]">
                                <h2 className="card-title">Post Title</h2>
                                <p>
                                    Click the button to listen on Spotiwhy app.
                                </p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>

                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                        Press ESC key or click on ✕ button to close
                    </p>
                </div>
            </dialog>
        </>
    );
};

export default PostCard;
