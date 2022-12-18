import { Link } from "react-router-dom"
import { usePost } from "../../contexts/PostContext";
import "../../App.css";

function Post(props) {
    const post = props.post;
    const { postDispatch} = usePost();

    const bookmarkPost = (post) => {
        postDispatch({type:"UPDATE_POST", value: post});
    }

    const timeDifference = (postTime) => {
        const now = Date.now();
        const diff = now - postTime ; 
        if(diff > 2592000000){
            return ` ${Math.floor(diff/2592000000)} months`;
        }
        else if(diff > 86400000){
            return ` ${Math.floor(diff/86400000)} days`;
        }
        else if( diff > 3600000){
            return ` ${Math.floor(diff/3600000)} hrs`;
        }
        else if(diff > 60000){
            return ` ${Math.floor(diff/60000)} mins`;
        }
        else {
            return ` ${Math.floor(diff/1000)} secs`;
        }
    }


    return (
        <div className="post bg-white p-3 d-flex gap-2 rounded">
            <Link className="avatar-image feed-avatar d-flex justify-content-center align-items-start" to="/profile">
                <img src={post.userAvatar} className="img-fluid rounded-circle w-50" alt="avatar" />
            </Link>
            <div className="post-body d-flex flex-column gap-1">
                <div className="post-user-title d-flex gap-2">
                    <span className="fw-bolder">{post.userName}</span>
                    <small className="small-text align-self-center" >{timeDifference(post.date_created)} ago</small>
                </div>
                <div className="post-content d-flex flex-column">
                    {post.text}
                    {
                        (post.imageSource !== null) ?
                            <img src={post.imageSource} className="img-fluid rounded w-25" alt="avatar" /> : ""
                    }
                </div>
                <div className="action-icons d-flex justify-content-between">
                    <i className="bi bi-heart"></i>
                    <i className="bi bi-chat-left"></i>
                    <i className={`${post.bookmarked ? "bi bi-bookmark-fill" : "bi bi-bookmark"}`} role={"button"} onClick={()=>{bookmarkPost(post)}}></i>
                </div>
            </div>
        </div>
    )
}

export { Post }