import { Link } from "react-router-dom";

function Signup(){
    return (
        <div className="authentication-page-layout">
            <div className="d-flex justify-content-center align-items-center  flex-column h-50 w-auto gap-3">
                <div className="site-title fs-1 fw-bold fst-italic"><Link className="text-decoration-none text-white" to="/">SOCIALIZE</Link></div>
                <div className="login-body d-flex flex-column align-items-center bg-white px-5 shadow rounded-4">
                    <div className="login-title fs-4 fw-bold pt-2 px-2">Signup</div>
                    <div className="body d-flex flex-column align-items-center gap-3 px-4 pt-4 ">
                        <div className="row">
                            <div className="col input-field form-floating d-flex flex-column">
                                <input className="form-control"  type="text" id="name" placeholder="Full Name"/>
                                <label for="name">Full Name</label>
                            </div>
                            <div className="col input-field form-floating d-flex flex-column">
                                <input className="form-control"  type="number" id="mobile" placeholder="Mobile Number" />
                                <label for="mobile">Mobile</label>
                            </div>
                        </div>
                        <div className="input-field form-floating d-flex flex-column w-100">
                            <input className="form-control"  type="email" id="email" placeholder="Email Address" />
                            <label htmlFor="email">Email Address    </label>
                        </div>
                        <div className="input-field form-floating d-flex flex-column w-100">
                            <input className="form-control"  type="password" id="password" placeholder="Password" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input-field form-floating d-flex flex-column w-100">
                            <input className="form-control"  type="password" id="confirmPassword" placeholder="Confirm Password" />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>
                        <div className="signup-btn w-100">
                            <button className="login-btn btn btn-primary w-100">Create New Account</button>
                        </div>
                        <div className="login-option">
                            <p><Link className="text-decoration-none text-reset" to="/login">Already have an Account? </Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Signup }