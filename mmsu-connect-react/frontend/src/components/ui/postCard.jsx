import React from "react"
import Menu from "./menu";
import Comment from "./comment";
import { useState, useEffect } from "react";
import api from "../../api";

const PostCard = ({post, onDelete}) => {
    const formattedDate = new Date(post.created_at).toLocaleDateString("en-US")

    const [commentContent, setCommentContent] = useState("");
    const [comments, setComments] = useState([]);
    const [commenter, setCommenter] = useState("");

    const createComment = () =>{
        api.post(`/api/posts/comment/${post.id}/`, { content: commentContent, post_id : post.id})
            .then((res) => {
                if(res.status === 201) {
                    alert("Comment created");
                } else {
                    alert("Comment failed to make");
                }
            })
            .catch((err) => alert(err));
    }

    useEffect(() =>{
        getComment();
    }, [])

    const getComment = () =>{
        console.log("HEHE");
        api.get(`/api/posts/comment/${post.id}/`)
        .then((res) => res.data)
        .then((data) => {setComments(data); console.log(data)})
        .catch((err) => alert(err));
    }

    const getCommenter = (id) =>{
        api.get(`/api/posts/commentor/${id}/`)
        .then((res) => res.data)
        .then((data) => {setCommenter(data); console.log(data)})
        .catch((err) => alert(err));
    }

    return (
        <>
            {/* <button
                onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                }
            > */}
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
                                <h2 className="post-title">
                                    {post.title}
                                </h2>
                                <p classname="post-content">
                                    {post.content}
                                </p>
                                <p classname="post-date">
                                    {formattedDate}
                                </p>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    required
                                    onChange={(e) => setCommentContent(e.target.value)}
                                    className="input input-bordered"
                                    value={commentContent}
                                />
                                <button className='comment-btn' onClick={() => createComment()}> comment </button>
                                {comments.map((comment) => (<p>{comment.content} </p>))}
                                <button className="delete-btn" onClick={() => onDelete(post.id)}>
                                    Delete
                                </button>
                                <div className="card-actions">
                                    <Menu />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </button> */}
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
