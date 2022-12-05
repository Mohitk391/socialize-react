import image from  "../../Assets/img_avatar.png";

function AccountSidebar() {
    return (
        <div className="accounts-suggestion d-flex flex-column align-self-start flex-grow-0 gap-2 bg-white px-3 py-2 rounded" >
                    <div className="accounts-title d-flex justify-content-between align-items-center gap-5 text-nowrap">
                        <span className="fw-bolder">Suggested Accounts</span>
                        <button className="btn text-primary px-0">Show More</button>
                    </div>
                    <div className="suggested-accounts d-flex flex-column gap-2">
                        <div className="user-account d-flex">
                            <div className="feed-avatar" >
                                <a className="avatar-image d-flex justify-content-center" href="/profile.html">
                                    <img src={image} className=" img-fluid rounded-circle w-50" alt="avatar" />
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
                                    <img src={image} className=" img-fluid rounded-circle w-50" alt="avatar" />
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
                                    <img src={image} className=" img-fluid rounded-circle w-50" alt="avatar" />
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
                                    <img src={image} className=" img-fluid rounded-circle w-50" alt="avatar" />
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
    );
}


export { AccountSidebar }