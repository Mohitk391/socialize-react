import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

function Signup(){
    const navigate = useNavigate();
    const { userDispatch } = useUser();
    const [user, setUser] = useState({name:"", mobile: "", password: "", confirmPassword: "", nameError: false, mobileError: false, passwordError: false, confirmPasswordError: false});

    const signup = async (e) => {
        e.preventDefault();
        if((user.name.trim()).length === 0 || (user.mobile.trim()).length===0 || (user.email.trim()).length ===0 || (user.password.trim()).length ===0){
            if((user.name.trim()).length === 0)
                setUser({...user, nameError: true});
            if((user.mobile.trim()).length === 0)
                setUser({...user, mobileError: true});
            if((user.password.trim()).length === 0)
                setUser({...user, passwordError: true});
        }
        else{
            userDispatch({type: "SET_USER", value: "Mohit_Patel123"});
            localStorage.setItem("token", "Mohit_Patel123");
            navigate("/");
        }
        
    }

    const checkConfirmPassword = (e) => {
        setUser({...user, confirmPassword: e.target.value});
        if(user.password !== e.target.value){
            setUser({...user, confirmPasswordError: true});
        }
        else {
            setUser({...user, confirmPasswordError: false});
        }
    }

    return (
        <div className="authentication-page-layout">
            <div className="d-flex justify-content-center align-items-center  flex-column h-50 w-auto gap-3">
                <div className="site-title fs-1 fw-bold fst-italic"><Link className="text-decoration-none text-white" to="/">SOCIALIZE</Link></div>
                <div className="login-body d-flex flex-column align-items-center bg-white px-5 shadow rounded-4">
                    <div className="login-title fs-4 fw-bold pt-2 px-2">Signup</div>
                    <form className="body d-flex flex-column align-items-center gap-3 px-4 pt-4 " onSubmit={(e)=>signup(e)}>
                        <div className="row">
                            <div className="col input-field form-floating d-flex flex-column">
                                <input className={`${user.nameError ? "border-danger" : ""} form-control`}  type="text" id="name" placeholder="Full Name" onChange={(e)=>setUser({...user, name: e.target.value, nameError: false})}/>
                                <label for="name">Full Name</label>
                            </div>
                            <div className="col input-field form-floating d-flex flex-column">
                                <input className={`${user.mobileError ? "border-danger" : ""} form-control`}  type="number" id="mobile" placeholder="Mobile Number" onChange={(e)=>setUser({...user, mobile: e.target.value, mobileError: false})}/>
                                <label for="mobile">Mobile</label>
                            </div>
                        </div>
                        <div className="input-field form-floating d-flex flex-column w-100">
                            <input className={`${user.emailError ? "border-danger" : ""} form-control`}  type="email" id="email" placeholder="Email Address" onChange={(e)=>setUser({...user, email: e.target.value, emailError: false})}/>
                            <label htmlFor="email">Email Address    </label>
                        </div>
                        <div className="input-field form-floating d-flex flex-column w-100">
                            <input className={`${user.passwordError ? "border-danger" : ""} form-control`}  type="password" id="password" placeholder="Password"onChange={(e)=>setUser({...user, password: e.target.value, passwordError: false})}/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input-field form-floating d-flex flex-column w-100">
                            <input className={`${user.confirmPasswordError ? "border-danger" : ""} form-control`}  type="password" id="confirmPassword" placeholder="Confirm Password" onChange={(e)=>checkConfirmPassword(e)}/>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>
                        <div className="signup-btn w-100">
                            <button className="login-btn btn btn-primary w-100">Create New Account</button>
                        </div>
                        <div className="login-option">
                            <p><Link className="text-decoration-none text-reset" to="/login">Already have an Account? </Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export { Signup }