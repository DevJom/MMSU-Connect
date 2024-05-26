import SideCard from "../components/ui/sideCard";
import PostCard from "../components/ui/postCard";
import Sidebar from "../components/ui/sidebar";
import Createpost from "../components/ui/createpost";
import {useState, useEffect} from "react"
import api from "../api";

const Home = () => {
    const [notes, setPosts] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    
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
        api.delete(`/api/posts/delete/${id}`).then((res) => {
            if(res.status === 204) alert("Post deleted");
            else alert("Failed to delete post");
        }).catch((err) => alert(err));
        getPosts();
    };

    const createPost = (e) =>{
        e.preventDefault();
        api.post("/api/posts/", {content, title}).then((res) => {
            if(res.status === 201) alert("Post created");
            else alert("Post failed to make");
        }).catch((err) => alert(err));
        getPosts();
    }

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

                    <PostCard></PostCard>
                </div>

                <div className="shrink w-fit ">
                    <Sidebar />
                </div>
            </div>
        </>
    );
};

export default Home;
