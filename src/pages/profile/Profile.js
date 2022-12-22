import { AccountSidebar } from "../../components/AccountSidebar/AccountSidebar";
import { NavBar } from "../../components/NavBar/NavBar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "../../App.css";
import image from  "../../Assets/img_avatar.png";
import { usePost } from "../../contexts/PostContext";
import { useUser } from "../../contexts/UserContext";
import { Post } from "../../components/Post/Post";
import { useState } from "react";
import { Link } from "react-router-dom";


function Profile(){
    const { postState: {posts}} = usePost();
    const {userState: {user}, userDispatch} = useUser();
    const [selectedImage, setSelectedImage] = useState(null);
    const [userDetails, setUserDetails] = useState({name: user.name, bio: user.bio, email: user.email, profilePicture: user.profilePicture,connections: user.connections, posts: user.posts });
    const updateUserDetails = () =>{
        userDispatch({type: "UPDATE_USER", value: userDetails});
    }

    return(
        <div className="page-layout">
            <NavBar />
            <main className="feed-body d-flex justify-content-evenly gap-3 p-3">
                <Sidebar />
                <div className="content-section d-flex flex-column gap-3 w-50 flex-grow-1">
                    <div className="user-info d-flex flex-column align-items-center gap-2">
                        <div className="feed-avatar avatar-image d-flex justify-content-center" role={"button"} data-bs-toggle="modal" data-bs-target="#profilePictureModal">
                            <img src={userDetails.profilePicture} className=" img-fluid rounded-circle w-25" alt="avatar" />
                        </div>
                        <div className="user-name">
                            <p className="fw-bolder fs-3">{userDetails.name}</p >
                        </div>
                        <div className="edit-profile">
                            <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editProfileModal">Edit Profile</button>
                        </div>
                        <div className="user-bio">
                            <p>{userDetails.bio}</p>
                        </div>
                        <div className="connection-details bg-white rounded py-3 px-4">
                            <Link className="text-decoration-none text-black" to="/profile"><span><b>{user.connections.length}</b> Connections</span></Link>
                        </div>
                    </div>
                    <div className="feed-posts-display">
                        <p className="fs-4 fw-bolder">Your Posts</p>
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
        
            <div className="modal fade" id="editProfileModal" tabIndex="-1" aria-labelledby="editProfileModalLabel" aria-hidden="true">
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
                                    <img src={selectedImage ? URL.createObjectURL(selectedImage) : image} className=" img-fluid rounded-circle w-50" alt="avatar" />
                                    <input  className="image-input" type="file" id="image-input" accept="image/x-png,image/gif,image/jpeg" onChange={(event) => {
                                        setSelectedImage(event.target.files[0]);
                                        setUserDetails({...userDetails, profilePicture: URL.createObjectURL(event.target.files[0])});
                                    }}/> 
                                </label>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" value={userDetails.name} onChange={event => setUserDetails({...userDetails, name: event.target.value})}/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Bio</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange= { event => setUserDetails({...userDetails, bio: event.target.value})} value={userDetails.bio}></textarea>
                        </div>
                        <div className="mb-2">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" value={userDetails.email} onChange= { event => setUserDetails({...userDetails, email: event.target.value})}/>
                        </div>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>updateUserDetails()}>Save changes</button>
                    </div>
                </div>
                </div>
            </div>

            <div className="modal fade" id="profilePictureModal" tabIndex="-1" aria-labelledby="profilePictureModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="profilePictureModalLabel">Profile Picture</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img src={image} className=" img-fluid" alt="avatar" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Profile }