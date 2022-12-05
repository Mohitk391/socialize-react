import { NavBar } from "../../components/NavBar/NavBar";
import "./Homepage.css";

function Homepage() {
    return (
        <div className="page-layout">
            <NavBar />
            <main className="feed-body d-flex justify-content-evenly gap-4 p-3">
                <section className="sidebar d-flex flex-column align-self-start gap-3 px-2 flex-grow-0" >
                    <div className="navigation-menu d-flex flex-column gap-3">
                        <div className="d-flex gap-3 fs-5 fw-bold"><i className="bi bi-house-door-fill"></i> <a className="text-decoration-none text-black" href="/index.html">Home</a></div>
                        <div className="d-flex gap-3 fs-5"><i className="bi bi-bookmark"></i><a className="text-decoration-none text-black" href="/bookmarks.html">Bookmarks</a></div>
                        <div className="d-flex gap-3 fs-5"><i className="bi bi-person-circle"></i><a className="text-decoration-none text-black" href="/profile.html">Profile</a></div>
                    </div>
                    <button className="btn btn-outline-primary">Create New Post</button>
                </section>
                <div className="content-section d-flex flex-column gap-3 w-50 flex-grow-1">
                    <div className="feed-input bg-white p-3 d-flex gap-2 rounded">
                            <div className="feed-avatar flex-shrink-1" >
                                <a className="avatar-image d-flex justify-content-center" href="/profile.html">
                                    <img src="/img_avatar.png" className=" img-fluid rounded-circle w-50" alt="avatar" />
                                </a>
                            </div>
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
                                <div className="feed-avatar flex-shrink-1" >
                                    <a className="avatar-image d-flex justify-content-center" href="/profile.html">
                                        <img src="/img_avatar.png" className=" img-fluid rounded-circle w-50" alt="avatar" />
                                    </a>
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
                                        <div className="icon bookmark-icon"><i className="bi bi-bookmark"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="post bg-white p-3 d-flex gap-2 rounded">
                                <div className="feed-avatar flex-shrink-1" >
                                    <a className="avatar-image d-flex justify-content-center" href="/profile.html">
                                        <img src="/img_avatar.png" className=" img-fluid rounded-circle w-50" alt="avatar" />
                                    </a>
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
                                        <div className="icon bookmark-icon"><i className="bi bi-bookmark"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="post bg-white p-3 d-flex gap-2 rounded">
                                <div className="feed-avatar flex-shrink-1" >
                                    <a className="avatar-image d-flex justify-content-center" href="/profile.html">
                                        <img src="/img_avatar.png" className=" img-fluid rounded-circle w-50" alt="avatar" />
                                    </a>
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
                                        <div className="icon bookmark-icon"><i className="bi bi-bookmark"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="post bg-white p-3 d-flex gap-2 rounded">
                                <div className="feed-avatar flex-shrink-1" >
                                    <a className="avatar-image d-flex justify-content-center" href="/profile.html">
                                        <img src="/img_avatar.png" className=" img-fluid rounded-circle w-50" alt="avatar" />
                                    </a>
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
                                        <div className="icon bookmark-icon"><i className="bi bi-bookmark"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accounts-suggestion d-flex flex-column align-self-start flex-grow-0 gap-2 bg-white px-3 py-2 rounded" >
                    <div className="accounts-title d-flex justify-content-between align-items-center gap-5 text-nowrap">
                        <span className="fw-bolder">Suggested Accounts</span>
                        <button className="btn text-primary px-0">Show More</button>
                    </div>
                    <div className="suggested-accounts d-flex flex-column gap-2">
                        <div className="user-account d-flex">
                            <div className="feed-avatar" >
                                <a className="avatar-image d-flex justify-content-center" href="/profile.html">
                                    <img src="/img_avatar.png" className=" img-fluid rounded-circle w-50" alt="avatar" />
                                </a>
                            </div>
                            <div className="user details d-flex justify-content-between w-100 align-items-start">
                                <div className="username">
                                    <div className="fw-bolder">User Name</div>
                                </div>
                                <div className="connect-action">
                                    <button className="btn text-primary p-0">Connect+</button>
                                </div>
                            </div>
                        </div>
                        <div className="user-account d-flex">
                            <div className="feed-avatar" >
                                <a className="avatar-image d-flex justify-content-center" href="/profile.html">
                                    <img src="/img_avatar.png" className=" img-fluid rounded-circle w-50" alt="avatar" />
                                </a>
                            </div>
                            <div className="user details d-flex justify-content-between w-100 align-items-start">
                                <div className="username">
                                    <span className="fw-bolder">User Name</span>
                                </div>
                                <div className="connect-action">
                                    <button className="btn text-primary p-0">Connect+</button>
                                </div>
                            </div>
                        </div>
                        <div className="user-account d-flex">
                            <div className="feed-avatar" >
                                <a className="avatar-image d-flex justify-content-center" href="/profile.html">
                                    <img src="/img_avatar.png" className=" img-fluid rounded-circle w-50" alt="avatar" />
                                </a>
                            </div>
                            <div className="user details d-flex justify-content-between w-100 align-items-start">
                                <div className="username">
                                    <span className="fw-bolder">User Name</span>
                                </div>
                                <div className="connect-action">
                                    <button className="btn text-primary p-0">Connect+</button>
                                </div>
                            </div>
                        </div>
                        <div className="user-account d-flex">
                            <div className="feed-avatar" >
                                <a className="avatar-image d-flex justify-content-center" href="/profile.html">
                                    <img src="/img_avatar.png" className=" img-fluid rounded-circle w-50" alt="avatar" />
                                </a>
                            </div>
                            <div className="user details d-flex justify-content-between w-100 align-items-start">
                                <div className="username">
                                    <span className="fw-bolder">User Name</span>
                                </div>
                                <div className="connect-action">
                                    <button className="btn text-primary p-0">Connect+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export { Homepage }