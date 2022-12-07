import { Link } from "react-router-dom";
import "./authentication.css";

function Login(){
    return (
        <div className="authentication-page-layout">
            <div className="d-flex justify-content-center align-items-center  flex-column h-50 w-auto gap-3">
            <div className="site-title fs-1 fw-bold fst-italic"><Link className="text-decoration-none text-white" to="/">SOCIALIZE</Link></div>
            <div className="login-body d-flex flex-column align-items-center bg-white px-5 shadow rounded-4">
                <div className="login-title fs-4 fw-bold pt-2 px-2">Login</div>
                <div className="body d-flex flex-column align-items-center gap-2 p-4">
                    <div className="input-field d-flex flex-column ">
                        <label className="fw-bold" for="mobile">Mobile</label>
                        <input className="form-control"  type="number" id="mobile" placeholder="Enter Mobile No." />
                    </div>
                    <div className="input-field d-flex flex-column ">
                        <label className="fw-bold" for="password">Password</label>
                        <input  className="form-control" type="password" id="password" placeholder="Enter Password" />
                    </div>
                    <div className="forgot-pwd">
                        <small><a className="text-decoration-none text-start text-danger" href="/">Forgot Password?</a></small>
                    </div>
                    <button  className="login-btn btn btn-primary w-100">Login</button>
                    <div className="signup-option">
                        <p><Link className="text-decoration-none text-reset" to="/signup">Create new Account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export { Login }