import { useState } from 'react';

const Createpost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handlePost = () => {
        // Here you can handle the post logic, e.g., sending a request to your backend
        
        // Reload the page
        window.location.reload();
    };

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
                                {"What's on your mind, User?"}
                            </label>

                            <input
                                type="checkbox"
                                id="my_modal_7"
                                className="modal-toggle"
                            />
                            <div className="modal bg-success" role="dialog">
                                <div className="modal-box">
                                    <h3 className="text-lg font-bold bg-su">
                                        Create Post
                                    </h3>
                                    <div className="modal-body">
                                        <input
                                            type="text"
                                            className="input mb-4"
                                            placeholder="Title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                        <textarea
                                            className="textarea mb-4"
                                            placeholder="Content"
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                        />
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            className="btn btn-primary"
                                            onClick={handlePost}
                                        >
                                            Post
                                        </button>
                                    </div>
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
