import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAccount } from "../../contexts/AccountContext";
import { useUser } from "../../contexts/UserContext";


function NavBar(){
    const { userState,userDispatch } = useUser();
    const [ searchVal, setSearchVal ] = useState("");
    const {accountState : {accounts}, accountDispatch} = useAccount();
    const navigate = useNavigate();

    const logoutUser = () => {
        localStorage.clear();
        userDispatch({type:"UNSET_USER"}); 
        navigate("/");
    }

    const isUserConnected = (account)=> {
        return userState.user.connections.find(element => element.id===account.id)
    }

    const updateUser = account => {
        if(isUserConnected(account)) {
            const updatedAccounts = accounts.map(currentAccount => currentAccount.id === account.id ? {...currentAccount, connections: currentAccount.connections.filter(element => element.id !== userState.user.id)} : currentAccount);

            accountDispatch({type: "SET_ACCOUNTS", value: updatedAccounts});
            userDispatch({type: "UPDATE_USER", value: {...userState.user, connections: userState.user.connections.filter(element=> element.id !== account.id)}}); 
        } 
        else{
            const updatedAccounts = accounts.map(currentAccount => currentAccount.id === account.id ? {...currentAccount, connections: [...currentAccount.connections, userState.user]} : currentAccount);

            accountDispatch({type: "SET_ACCOUNTS", value: updatedAccounts});
            userDispatch({type: "UPDATE_USER", value: {...userState.user, connections: [...userState.user.connections, {id: account.id, name: account.name}]}});
        }
    }

    const showSearchResult = (word) => {
        setSearchVal(word);
    }

    const filteredAccounts = searchVal.length > 0 ? accounts.filter(account => (account.name.toLowerCase().includes(searchVal)) || (account.email.toLowerCase().includes(searchVal)) || (account.mobile.toString().includes(searchVal))).sort((account)=>isUserConnected(account) ? -1 : 1) : [];

    return (
        <nav className="navbar px-3 align-items-center bg-white">
                <div className="site-title fs-3 fw-bold fst-italic">
                    <Link className="text-decoration-none text-primary" to="/">SOCIALIZE</Link>
                </div>
                <div>
                    <div className="navbar-search input-group dropdown">
                        <input className="navbar-searchbar form-control dropdown-toggle mb-1" type="text" placeholder="Search Accounts..." size="40" onChange={(event)=>showSearchResult(event.target.value)} data-bs-toggle="dropdown" data-bs-auto-close="true" />
                        {  
                            <ul className="dropdown-menu w-100">
                            {    (filteredAccounts?.length > 0) ?                   
                                filteredAccounts.map( account => {
                                    return <li id={account.id} className="dropdown-item w-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link className="text-decoration-none" to="/profile">{account.name}</Link>
                                            { isUserConnected(account) ? 
                                                <button className="btn btn-primary rounded-pill  align-self-center" onClick={()=>{updateUser(account)}}>Connected</button>
                                            :    <button className="btn btn-outline-primary rounded-pill align-self-center" onClick={()=>{updateUser(account)}}>Connect</button>   
                                            }
                                        </div>
                                        </li>
                                }) 
                                : <li className="dropdown-item">No Matches Found</li>
                            }
                            </ul>
                            
                        }
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