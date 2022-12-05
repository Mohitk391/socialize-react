import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <section className="sidebar d-flex flex-column align-self-start gap-3 px-2 flex-grow-0" >
                    <div className="navigation-menu d-flex flex-column gap-3">
                    <div className="d-flex gap-3 fs-5"><i className="bi bi-house-door"></i> <Link className="text-decoration-none text-black" to="/">Home</Link></div>
                    <div className="d-flex gap-3 fs-5"><i className="bi bi-bookmark"></i><Link className="text-decoration-none text-black" to="/bookmarks">Bookmarks</Link></div>
                    <div className="d-flex gap-3 fs-5"><i className="bi bi-person-circle"></i><Link className="text-decoration-none text-black" to="/profile">Profile</Link></div>
                    </div>
                    <button className="btn btn-outline-primary">Create New Post</button>
                </section>
    );
}

export { Sidebar }