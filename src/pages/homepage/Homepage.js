import { NavBar } from "../../components/NavBar/NavBar";
import "../../App.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { AccountSidebar } from "../../components/AccountSidebar/AccountSidebar";
import image from  "../../Assets/img_avatar.png";
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div className="page-layout">
            <NavBar />
            <main className="feed-body d-flex justify-content-evenly gap-3 p-3">
                <Sidebar />
                <div className="content-section d-flex flex-column gap-3 w-50 flex-grow-1">
                    <div className="feed-input bg-white p-3 d-flex gap-2 rounded">
                        <Link className="avatar-image feed-avatar d-flex justify-content-center align-items-start" to="/profile">
                            <img src={image} className=" img-fluid rounded-circle w-75" alt="avatar" />
                        </Link>
                        <div className="textarea-input w-100">
                            <div className="textarea input-group mb-2">
                                <textarea className="form-control" type="text" placeholder="Write something interesting..." rows="4" ></textarea>
                            </div>
                            <div className="options d-flex justify-content-between px-3">
                                <div className="images-option-panel">
                                    <label htmlFor="image-input"><i className="bi bi-card-image fs-4"></i></label>
                                    <input className="image-input" type="file" id="image-input" title="Image"  accept="image/x-png,image/gif,image/jpeg" /> 
                                </div>
                                <div className="submit-option">
                                    <button className="btn btn-primary">Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feed-posts-display">
                        <p className="fs-4 fw-bolder text-start">Latest Posts</p>
                        <div className="posts-body d-flex flex-column gap-2">
                            <div className="post bg-white p-3 d-flex gap-2 rounded">
                                <Link className="avatar-image feed-avatar d-flex justify-content-center align-items-start" to="/profile">
                                    <img src={image} className="img-fluid rounded-circle w-75" alt="avatar" />
                                </Link>
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
                                        <i className="bi bi-heart"></i>
                                        <i className="bi bi-chat-left"></i>
                                        <i className="bi bi-bookmark"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="post bg-white p-3 d-flex gap-2 rounded">
                                <Link className="avatar-image feed-avatar d-flex justify-content-center align-items-start" to="/profile">
                                    <img src={image} className="img-fluid rounded-circle w-75" alt="avatar" />
                                </Link>
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
                                        <i className="bi bi-heart"></i>
                                        <i className="bi bi-chat-left"></i>
                                        <i className="bi bi-bookmark"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="post bg-white p-3 d-flex gap-2 rounded">
                                <Link className="avatar-image feed-avatar d-flex justify-content-center align-items-start" to="/profile">
                                    <img src={image} className="img-fluid rounded-circle w-75" alt="avatar" />
                                </Link>
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
                                        <i className="bi bi-heart"></i>
                                        <i className="bi bi-chat-left"></i>
                                        <i className="bi bi-bookmark"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="post bg-white p-3 d-flex gap-2 rounded">
                                <Link className="avatar-image feed-avatar d-flex justify-content-center align-items-start" to="/profile">
                                    <img src={image} className="img-fluid rounded-circle w-75" alt="avatar" />
                                </Link>
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
                                        <i className="bi bi-heart"></i>
                                        <i className="bi bi-chat-left"></i>
                                        <i className="bi bi-bookmark"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AccountSidebar />
            </main>
        </div>
    )
}

export { Homepage }