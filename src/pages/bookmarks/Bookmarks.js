import { NavBar } from "../../components/NavBar/NavBar";
import "../../App.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { AccountSidebar } from "../../components/AccountSidebar/AccountSidebar";
import image from  "../../Assets/img_avatar.png";

function Bookmarks(){
    return(
        <div className="page-layout">
        <NavBar />
        <main className="feed-body d-flex justify-content-evenly gap-4 p-3">
            <Sidebar />
            <div className="content-section d-flex flex-column gap-3 w-50 flex-grow-1">
                <div className="feed-posts-display">
                    <p className="fs-4 fw-bolder">Your Bookmarks</p>
                    <div className="posts-body d-flex flex-column gap-2">
                        <div className="post bg-white p-3 d-flex gap-2 rounded">
                            <div className="feed-avatar flex-shrink-1" >
                                <div className="avatar-image d-flex justify-content-center">
                                    <img src={image} className=" img-fluid rounded-circle w-50" alt="avatar" />
                                </div>
                            </div>
                            <div className="post-body d-flex flex-column gap-1">
                                <div className="post-user-title d-flex gap-2">
                                    <span className="fw-bolder">User Name</span>
                                    <small className="small-text align-self-end">10hr</small>
                                </div>
                                <div className="post-content">
                                    This is a demo post containing demo content. Please check out other posts as well.
                                    Have a nice day!!!
                                </div>
                                <div className="action-icons d-flex justify-content-between">
                                    <div className="icon heart-icon"><i className="bi bi-heart"></i></div>
                                    <div className="icon comment-icon"><i className="bi bi-chat-left"></i></div>
                                    <div className="icon bookmark-icon"><i className="bi bi-bookmark-fill"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="post bg-white p-3 d-flex gap-2 rounded">
                            <div className="feed-avatar flex-shrink-1" >
                                <div className="avatar-image d-flex justify-content-center">
                                    <img src={image} className=" img-fluid rounded-circle w-50" alt="avatar" />
                                </div>
                            </div>
                            <div className="post-body d-flex flex-column gap-1">
                                <div className="post-user-title d-flex gap-2">
                                    <span className="fw-bolder">User Name</span>
                                    <small className="small-text align-self-end" >10hr</small>
                                </div>
                                <div className="post-content">
                                    This is a demo post containing demo content. Please check out other posts as well.
                                    Have a nice day!!!
                                </div>
                                <div className="action-icons d-flex justify-content-between">
                                    <div className="icon heart-icon"><i className="bi bi-heart"></i></div>
                                    <div className="icon comment-icon"><i className="bi bi-chat-left"></i></div>
                                    <div className="icon bookmark-icon"><i className="bi bi-bookmark-fill"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="post bg-white p-3 d-flex gap-2 rounded">
                            <div className="feed-avatar flex-shrink-1">
                                <div className="avatar-image d-flex justify-content-center">
                                    <img src={image} className=" img-fluid rounded-circle w-50" alt="avatar" />
                                </div>
                            </div>
                            <div className="post-body d-flex flex-column gap-1">
                                <div className="post-user-title d-flex gap-2">
                                    <span className="fw-bolder">User Name</span>
                                    <small className="small-text align-self-end" >10hr</small>
                                </div>
                                <div className="post-content">
                                    This is a demo post containing demo content. Please check out other posts as well.
                                    Have a nice day!!!
                                </div>
                                <div className="action-icons d-flex justify-content-between">
                                    <div className="icon heart-icon"><i className="bi bi-heart"></i></div>
                                    <div className="icon comment-icon"><i className="bi bi-chat-left"></i></div>
                                    <div className="icon bookmark-icon"><i className="bi bi-bookmark-fill"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="post bg-white p-3 d-flex gap-2 rounded">
                            <div className="feed-avatar flex-shrink-1">
                                <div className="avatar-image d-flex justify-content-center">
                                    <img src={image} className=" img-fluid rounded-circle w-50" alt="avatar" />
                                </div>
                            </div>
                            <div className="post-body d-flex flex-column gap-1">
                                <div className="post-user-title d-flex gap-2">
                                    <span className="fw-bolder">User Name</span>
                                    <small className="small-text align-self-end">10hr</small>
                                </div>
                                <div className="post-content">
                                    This is a demo post containing demo content. Please check out other posts as well.
                                    Have a nice day!!!
                                </div>
                                <div className="action-icons d-flex justify-content-between">
                                    <div className="icon heart-icon"><i className="bi bi-heart"></i></div>
                                    <div className="icon comment-icon"><i className="bi bi-chat-left"></i></div>
                                    <div className="icon bookmark-icon"><i className="bi bi-bookmark-fill"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AccountSidebar />
        </main>
    </div>
    );
}

export { Bookmarks }