import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";


function NavBar(){
    const { userState,userDispatch } = useUser();
    const navigate = useNavigate();

    const logoutUser = () => {
        localStorage.clear();
        userDispatch({type:"UNSET_USER"}); 
        navigate("/");
    }

    return (
        <nav className="navbar px-3 align-items-center bg-white">
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
                    {   !userState.isUserLoggedIn ? 
                        <Link to="/login"><button className="btn btn-outline-primary ">Login</button></Link>
                        : 
                        <button className="btn btn-outline-danger" onClick = {()=>{logoutUser()}}>Logout</button>
                    }
                </div>
        </nav>
    );
}

export { NavBar }