import { NavLink } from "react-router-dom";

function Sidebar(){
    return(
        <section className="sidebar d-flex flex-column align-self-start gap-3 px-2 flex-grow-0" >
            <div className="navigation-menu d-flex flex-column gap-3">
                    
                    <NavLink className ={({isActive})=> isActive ? "d-flex gap-3 fs-5 text-decoration-none text-black fw-bolder" : "d-flex gap-3 fs-5 text-decoration-none text-black " } to="/">
                    <i className="bi bi-house-door"></i> Home
                    </NavLink>
                
                <div className="d-flex gap-3 fs-5">
                    <i className="bi bi-bookmark"></i>
                    <NavLink className ={({isActive})=> isActive ? "text-decoration-none text-black fw-bolder" : "text-decoration-none text-black " } to="/bookmarks">Bookmarks</NavLink>
                </div>
                <div className="d-flex gap-3 fs-5">
                    <i className="bi bi-person-circle"></i>
                    <NavLink className ={({isActive})=> isActive ? "text-decoration-none text-black fw-bolder" : "text-decoration-none text-black " } to="/profile">Profile</NavLink>
                </div>
            </div>
        </section>
    );
}

export { Sidebar }