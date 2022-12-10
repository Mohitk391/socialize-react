import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./authentication.css";
import {useUser} from "../../contexts/UserContext";

function Login(){
    const [user, setUser] = useState({ mobile: "", password: "", mobileError: false, passwordError: false});
    const { userDispatch } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    const login = e => {
        e.preventDefault();
        if((user.mobile.trim()).length === 0 || (user.password.trim()).length === 0){
            if((user.mobile.trim()).length===0)
                setUser({...user, mobileError: true});
            if((user.password.trim()).length === 0)
                setUser({...user, passwordError: true});
        }
        else{
            if(user.mobile=== "9876543210" && user.password==="mohit123"){
                userDispatch({type: "SET_USER", value: "Mohit_Patel123"});
                localStorage.setItem("token", "Mohit_Patel123");
                const from = location.state?.from || '/';
                navigate(from, { replace: true });
            }
            else{
                if(user.mobile!=="9876543210")
                    setUser({...user, mobileError: true});
                else
                    setUser({...user, passwordError: true});
            }
        }
    }

    return (
        <div className="authentication-page-layout">
            <div className="d-flex justify-content-center align-items-center  flex-column h-50 w-auto gap-3">
            <div className="site-title fs-1 fw-bold fst-italic"><Link className="text-decoration-none text-white" to="/">SOCIALIZE</Link></div>
            <form className="login-body d-flex flex-column align-items-center bg-white px-5 shadow rounded-4" onSubmit={(e)=>login(e)}>
                <div className="login-title fs-4 fw-bold pt-2 px-2">Login</div>
                <div className="body d-flex flex-column align-items-center gap-3 p-4">
                    <div className="input-field form-floating d-flex flex-column ">
                        <input className={`${user.mobileError ? "border-danger" : ""} form-control`} type="number" id="mobile" placeholder="Enter Mobile No." onChange={(e)=>setUser({...user, mobile: e.target.value, mobileError: false})}/>
                        <label  htmlFor="mobile">Mobile</label>
                    </div>
                    <div className="input-field form-floating d-flex flex-column ">
                        <input  className={`${user.passwordError ? "border-danger" : ""} form-control`} type="password" id="password" placeholder="Enter Password" onChange={(e)=>setUser({...user, password: e.target.value, passwordError: false})}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="forgot-pwd">
                        <small><a className="text-decoration-none text-start text-danger" href="/">Forgot Password?</a></small>
                    </div>
                    <button  className="login-btn btn btn-primary w-100">Login</button>
                    <div className="signup-option">
                        <p><Link className="text-decoration-none text-reset" to="/signup">Create new Account</Link></p>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
}

export { Login }