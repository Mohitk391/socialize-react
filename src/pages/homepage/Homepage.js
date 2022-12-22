import { NavBar } from "../../components/NavBar/NavBar";
import "../../App.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { AccountSidebar } from "../../components/AccountSidebar/AccountSidebar";
import image from  "../../Assets/img_avatar.png";
import { Link, useNavigate } from "react-router-dom";
import { usePost } from "../../contexts/PostContext";
import {useUser} from "../../contexts/UserContext";
import { useEffect, useState } from "react";
import { Post } from "../../components/Post/Post";
import { v4 as uuid } from "uuid";

function Homepage() {
    const { postState: {posts}, postDispatch} = usePost();
    const {userState: {user}} = useUser();
    const [selectedImage, setSelectedImage] = useState(null);
    const [post, setPost] = useState({userName: null  , userAvatar: image, text: "", likes: 0, imageSource: null, comments: [], bookmarked: false, date_created: Date.now()});
    const navigate = useNavigate();

    useEffect(() => {
        if(user === null){
            navigate("/login");
        }
        else{
            setPost({...post, userName: user.name, userAvatar: user.profilePicture});
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);
    

    const addPost = ()=>{
        if(post.text.trim().length || post.imageSource !== null){
            setPost({...post, date_created: Date.now()});
            postDispatch({type: "ADD_POST", value: post});
            setPost({...post, id: uuid() ,text: "", likes: 0, imageSource: null, comments: [], bookmarked: false, date_created: Date.now()});
            setSelectedImage(null);
        }
        
    }

    return (
        <div className="page-layout">
            <NavBar />
            <main className="feed-body d-flex justify-content-evenly gap-3 p-3">
                <Sidebar />
                <div className="content-section d-flex flex-column gap-3 w-50 flex-grow-1">
                    <div className="feed-input bg-white p-3 d-flex gap-2 rounded">
                        <Link className="avatar-image feed-avatar d-flex justify-content-center align-items-start" to="/profile">
                            <img src={post.userAvatar} className=" img-fluid rounded-circle w-75" alt="avatar" />
                        </Link>
                        <div className="textarea-input w-100">
                            <div className="textarea input-group mb-2">
                                <textarea className="form-control" type="text"value={post.text} placeholder="Write something interesting..." rows="4" onChange={(e)=>{setPost({...post, text: e.target.value})}}></textarea>
                            </div>
                            {selectedImage && (
                                <div className="d-flex justify-content-center align-items-center gap-3">
                                <img alt="not fount" width={"200px"} src={URL.createObjectURL(selectedImage)}/>
                                <br />
                                <button className="btn btn-outline-primary" onClick={()=>setSelectedImage(null)}>Remove</button>
                                </div>
                            )}
                            <div className="options d-flex justify-content-between px-3">
                                <div className="images-option-panel">
                                    <label htmlFor="image-input"><i className="bi bi-card-image fs-4"></i></label>
                                    <input className="image-input" type="file" id="image-input" title="Image"  accept="image/x-png,image/gif,image/jpeg" onChange={(event) => {
                                        setPost({...post, imageSource: URL.createObjectURL(event.target.files[0])});
                                    setSelectedImage(event.target.files[0]);
                                    }}/> 
                                </div>
                                <div className="submit-option">
                                    <button className="btn btn-primary" onClick={()=>addPost()}>Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feed-posts-display">
                        <p className="fs-4 fw-bolder text-start">Latest Posts</p>
                        <div className="posts-body d-flex flex-column gap-2">
                            {posts.map(post=>{
                                return (
                                    <Post post={post} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <AccountSidebar />
            </main>
        </div>
    )
}

export { Homepage }