const Createpost = () => {
    return (
        <div className="Create_Post">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body w-[500px]">
                    <div className="card-actions flex justify-center">
                        <div className="CreatePost_Modal">
                            <label
                                htmlFor="my_modal_7"
                                className="w-[450px] btn bg-base-300 text-gray-400 rounded-[50px]"
                            >
                               { "What's on your mind $USER ?"}
                            </label>

                            <input
                                type="checkbox"
                                id="my_modal_7"
                                className="modal-toggle"
                            />
                            <div className="modal bg-success" role="dialog">
                                <div className="modal-box">
                                    <h3 className="text-lg font-bold bg-su">
                                        UserName
                                    </h3>
                                    <p className="py-4">
                                        This modal works with a hidden checkbox!
                                    </p>
                                </div>
                                <label
                                    className="modal-backdrop"
                                    htmlFor="my_modal_7"
                                >
                                    Close
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Createpost;
