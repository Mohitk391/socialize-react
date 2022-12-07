import { Link } from "react-router-dom";
import image from  "../../Assets/img_avatar.png";

function AccountSidebar() {
    return (
        <div className="accounts-suggestion d-flex flex-column align-self-start flex-grow-0 gap-2 bg-white px-3 py-2 rounded" >
                    <div className="accounts-title d-flex justify-content-center text-nowrap">
                        <span className="fw-bolder">Suggested Accounts</span>
                    </div>
                    <div className="suggested-accounts d-flex flex-column gap-2">
                        <div className="user-account d-flex">
                            <Link className="avatar-image feed-avatar d-flex justify-content-center align-items-center" to="/profile">
                                <img src={image} className=" img-fluid rounded-circle w-75" alt="avatar" />
                            </Link>
                            
                            <div className="user details d-flex justify-content-between w-100 align-items-center">
                                <Link className="username text-decoration-none text-black " to="/profile">
                                    <div className="fw-bolder">User Name</div>
                                </Link>
                                <div className="connect-action">
                                    <button className="btn text-primary p-0">Connect+</button>
                                </div>
                            </div>
                        </div>
                        <div className="user-account d-flex">
                                <Link className="avatar-image feed-avatar d-flex justify-content-center align-items-center" to="/profile">
                                    <img src={image} className=" img-fluid rounded-circle w-75" alt="avatar" />
                                </Link>
                            
                            <div className="user details d-flex justify-content-between w-100 align-items-center ">
                                <Link className="username text-decoration-none text-black " to="/profile">
                                    <div className=" fs-6 fw-bolder">User Name</div>
                                </Link>
                                <div className="connect-action">
                                    <button className="btn text-primary p-0">Connect+</button>
                                </div>
                            </div>
                        </div>
                        <div className="user-account d-flex">
                            <Link className="avatar-image feed-avatar d-flex justify-content-center align-items-center" to="/profile">
                                <img src={image} className=" img-fluid rounded-circle w-75" alt="avatar" />
                            </Link>
                            
                            <div className="user details d-flex justify-content-between w-100 align-items-center">
                                <Link className="username text-decoration-none text-black " to="/profile">
                                    <div className="fw-bolder">User Name</div>
                                </Link>
                                <div className="connect-action">
                                    <button className="btn text-primary p-0">Connect+</button>
                                </div>
                            </div>
                        </div>
                        <div className="user-account d-flex">
                            <Link className="avatar-image feed-avatar d-flex justify-content-center align-items-center" to="/profile">
                                <img src={image} className=" img-fluid rounded-circle w-75" alt="avatar" />
                            </Link>
                            
                            <div className="user details d-flex justify-content-between w-100 align-items-center">
                                <Link className="username text-decoration-none text-black " to="/profile">
                                    <div className="fw-bolder">User Name</div>
                                </Link>
                                <div className="connect-action">
                                    <button className="btn text-primary p-0">Connect+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-outline-primary w-100">Show More</button>
                    </div>
                </div>
    );
}


export { AccountSidebar }