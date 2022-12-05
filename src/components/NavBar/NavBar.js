
function NavBar(){

    return (
        <nav className="navbar px-3 align-items-center">
                <div className="site-title fs-3 fw-bold fst-italic">
                    <a className="text-decoration-none text-primary" href="/index.html">SOCIALIZE</a>
                </div>
                <div>
                    <div className="navbar-search input-group">
                        <input className="navbar-searchbar form-control" type="text" placeholder="Search Posts, People, Anything..." size="40"/>
                        <button className="btn btn-outline-primary" type="button" id="button-addon2">
                            <a href="/">
                                <i className="bi bi-search text-black"></i>
                            </a>
                        </button>
                    </div>
                </div>
                <div className="nav-bar-buttons">
                    <a href="/login.html"><button className="btn btn-hover">Login</button></a>
                </div>
        </nav>
    );
}

export { NavBar }