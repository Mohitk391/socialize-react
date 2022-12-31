import { Link, useNavigate } from "react-router-dom";
import { useAccount } from "../../contexts/AccountContext";
import { useUser } from "../../contexts/UserContext";

function AccountSidebar() {
    const navigate = useNavigate();
    const {accountState: {accounts}} = useAccount(); 
    const {userState: {user}, userDispatch} = useUser();

    const isUserConnected = (account)=> {
        return user.connections.find(element => element.id===account.id)
    }

    const updateUser = account => {
        userDispatch({type: "UPDATE_USER", value: {...user, connections: [...user.connections, {id: account.id, name: account.name}]}});
    }

    return (
        <div className="accounts-suggestion d-flex flex-column align-self-start flex-grow-0 gap-2 bg-white px-3 py-2 rounded" >
                    <div className="accounts-title d-flex justify-content-center text-nowrap">
                        <span className="fw-bolder">Suggested Accounts</span>
                    </div>
                    <div className="suggested-accounts d-flex flex-column gap-2">
                    {
                        accounts.filter(element=>!isUserConnected(element)).slice(0,5).map(account=>{
                            return (
                            <div className="user-account d-flex">
                                <Link className="avatar-image feed-avatar d-flex justify-content-center align-items-center" to="/profile">
                                    <img src={account.image} className=" img-fluid rounded-circle w-75" alt="avatar" />
                                </Link>
                                
                                <div className="user details d-flex justify-content-between w-100 align-items-center">
                                    <Link className="username text-decoration-none text-black " to="/profile">
                                        <div className="fw-bolder">{account.name}</div>
                                    </Link>
                                    <div className="connect-action">
                                        <button className="btn text-primary p-0" onClick={()=>updateUser(account)}>Connect+</button>
                                    </div>
                                </div>
                            </div>);
                        })
                    }
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-outline-primary w-100" onClick={()=>navigate("/accounts")}>Show More</button>
                    </div>
                </div>
    );
}


export { AccountSidebar }