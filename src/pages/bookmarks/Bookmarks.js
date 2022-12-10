import { NavBar } from "../../components/NavBar/NavBar";
import "../../App.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { AccountSidebar } from "../../components/AccountSidebar/AccountSidebar";
import { usePost } from "../../contexts/PostContext";
import { Post } from "../../components/Post/Post";

function Bookmarks(){
    const { postState: {posts}} = usePost();
    const bookmarkedPosts = posts.filter(post => post.bookmarked);
    return(
        <div className="page-layout">
        <NavBar />
        <main className="feed-body d-flex justify-content-evenly gap-3 p-3">
            <Sidebar />
            <div className="content-section d-flex flex-column gap-3 w-50 flex-grow-1">
                <div className="feed-posts-display">
                    <p className="fs-4 fw-bolder">Your Bookmarks</p>
                    <div className="posts-body d-flex flex-column gap-2">
                    {bookmarkedPosts.map(post=>{
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
    );
}

export { Bookmarks }