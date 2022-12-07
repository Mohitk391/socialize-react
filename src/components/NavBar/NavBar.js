import { Link } from "react-router-dom";

function NavBar(){

    return (
        <nav className="navbar px-3 align-items-center">
                <div className="site-title fs-3 fw-bold fst-italic">
                    <Link className="text-decoration-none text-primary" to="/">SOCIALIZE</Link>
                </div>
                <div>
                    <div className="navbar-search input-group">
                        <input className="navbar-searchbar form-control" type="text" placeholder="Search Posts, People, Anything..." size="40"/>
                        <button className="btn btn-outline-primary" type="button" id="button-addon2">
                            <Link to="/">
                                <i className="bi bi-search text-black"></i>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="nav-bar-buttons">
                    <Link to="/login"><button className="btn btn-hover">Login</button></Link>
                </div>
        </nav>
    );
}

export { NavBar }