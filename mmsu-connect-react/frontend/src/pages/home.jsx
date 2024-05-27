import SideCard from "../components/ui/sideCard";
import PostCard from "../components/ui/postCard";
import Sidebar from "../components/ui/sidebar";
import Createpost from "../components/ui/createpost";
import {useState, useEffect} from "react"
import api from "../api";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() =>{
        getPosts();
    }, [])

    const getPosts  = () => {
        api.get("/api/posts/")
        .then((res) => res.data)
        .then((data) => {setPosts(data); console.log(data)})
        .catch((err) => alert(err));
    };

    const deletePost = (id) =>{
        console.log("HEHE");
        api.delete(`/api/posts/delete/${id}/`).then((res) => {
            if(res.status === 204) alert("Post deleted");
            else alert("Failed to delete post");
            getPosts();
        }).catch((err) => alert(err));
    };

    return ( 
        <>
            <div className=" bg-base-200 flex  gap-10 ">
                <div className="w-[400px] ml-4 flex-initial">
                    <SideCard
                        title="Popular"
                        description="Pogi ni Gabriel Andrei Adajar"
                    ></SideCard>
                </div>

                <div className="grow flex-initial">
                    <div className="mt-4 mb-4">
                        <Createpost></Createpost>
                    </div>
                    {posts.map((post) => (
                        <PostCard post={post} onDelete={deletePost} key={post.id}/>
                    ))}

                </div>

                <div className="shrink w-fit ">
                    <Sidebar />
                </div>
            </div>
        </>
    );
};

export default Home;
