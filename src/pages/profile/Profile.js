import { AccountSidebar } from "../../components/AccountSidebar/AccountSidebar";
import { NavBar } from "../../components/NavBar/NavBar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "../../App.css";
import image from  "../../Assets/img_avatar.png";
import { Link } from "react-router-dom";


function Profile(){
    return(
        <div className="page-layout">
            <NavBar />
            <main className="feed-body d-flex justify-content-evenly gap-3 p-3">
                <Sidebar />
                <div className="content-section d-flex flex-column gap-3 w-50 flex-grow-1">
                    <div className="user-info d-flex flex-column align-items-center gap-2">
                        <div className="feed-avatar avatar-image d-flex justify-content-center" role={"button"} data-bs-toggle="modal" data-bs-target="#profilePictureModal">
                            <img src={image} className=" img-fluid rounded-circle w-75" alt="avatar" />
                        </div>
                        <div className="user-name">
                            <p className="fw-bolder fs-3">User Name</p >
                        </div>
                        <div className="edit-profile">
                            <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editProfileModal">Edit Profile</button>
                        </div>
                        <div className="user-bio">
                            <p>A little information about user | User fills whatever he/she likes to fill here</p>
                        </div>
                        <div className="user-site">
                            <a className="text-decoration-none text-danger" href="/">username@google.com</a>
                        </div>
                        <div className="connection-details bg-white rounded py-3 px-4">
                            <a className="text-decoration-none text-black" href="/"><span><b>10</b> Connections</span></a>
                        </div>
                    </div>
                    <div className="feed-posts-display">
                        <p className="fs-4 fw-bolder">Your Posts</p>
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
                                        <div className="icon heart-icon"><i className="bi bi-heart"></i></div>
                                        <div className="icon comment-icon"><i className="bi bi-chat-left"></i></div>
                                        <div className="icon bookmark-icon"><i className="bi bi-bookmark"></i></div>
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
                                        <div className="icon heart-icon"><i className="bi bi-heart"></i></div>
                                        <div className="icon comment-icon"><i className="bi bi-chat-left"></i></div>
                                        <div className="icon bookmark-icon"><i className="bi bi-bookmark"></i></div>
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
                                        <div className="icon heart-icon"><i className="bi bi-heart"></i></div>
                                        <div className="icon comment-icon"><i className="bi bi-chat-left"></i></div>
                                        <div className="icon bookmark-icon"><i className="bi bi-bookmark"></i></div>
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
                                        <div className="icon heart-icon"><i className="bi bi-heart"></i></div>
                                        <div className="icon comment-icon"><i className="bi bi-chat-left"></i></div>
                                        <div className="icon bookmark-icon"><i className="bi bi-bookmark"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <AccountSidebar />
            </main>
        
            <div className="modal fade" id="editProfileModal" tabindex="-1" aria-labelledby="editProfileModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                    <h2 className="modal-title fs-5" id="editProfileModalLabel">Edit Profile</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex flex-column">
                            <div className="feed-avatar-modal align-self-center">
                                <label htmlFor="image-input" role="button"  className="avatar-image d-flex justify-content-center">
                                    <img src={image} className=" img-fluid rounded-circle w-50" alt="avatar" />
                                    <input  className="image-input" type="file" id="image-input" accept="image/x-png,image/gif,image/jpeg" /> 
                                </label>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="User Name" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Bio</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="mb-2">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Website</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
                </div>
            </div>

            <div class="modal fade" id="profilePictureModal" tabindex="-1" aria-labelledby="profilePictureModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="profilePictureModalLabel">Profile Picture</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src={image} className=" img-fluid" alt="avatar" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Profile }