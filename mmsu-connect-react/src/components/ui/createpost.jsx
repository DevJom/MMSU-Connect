const Createpost = () => {
    return (
        <div className="Create_Post">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="card-actions flex  justify-center">
                        <div className="CreatePost_Modal ">
                            <label
                                htmlFor="my_modal_7"
                                className="btn lg:w-[600px] mg:w-[400px] bg-base-300 text-gray-400 rounded-3xl"
                            >
                                What's on your mind $USER ?
                            </label>

                            {/* <label class="input input-bordered flex items-center gap-2">
                                            <input
                                                type="text"
                                                class="grow"
                                                placeholder="Search"
                                                htmlFor="my_modal_7"
                                            />
                                            <kbd class="kbd kbd-sm">⌘</kbd>
                                            <kbd class="kbd kbd-sm">K</kbd>
                                        </label> */}

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
