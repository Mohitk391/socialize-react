import { Link, useParams } from "react-router-dom"
import { AccountSidebar } from "../../components/AccountSidebar/AccountSidebar"
import { NavBar } from "../../components/NavBar/NavBar"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { useAccount } from "../../contexts/AccountContext";
import { useUser } from "../../contexts/UserContext";

function AccountsSuggestion() {
    const {accountState: {accounts}, accountDispatch} = useAccount(); 
    const {userState: {user}, userDispatch} = useUser();
    console.log(user);

    const isUserConnected = (account)=> {
        return user.connections.find(element => element.id===account.id)
    }

    const updateUser = account => {
        if(isUserConnected(account)) {
            const updatedAccounts = accounts.map(currentAccount => currentAccount.id === account.id ? {...currentAccount, connections: currentAccount.connections.filter(element => element.id !== user.id)} : currentAccount);

            accountDispatch({type: "SET_ACCOUNTS", value: updatedAccounts});
            userDispatch({type: "UPDATE_USER", value: {...user, connections: user.connections.filter(element=> element.id !== account.id)}}); 
        } 
        else{
            const updatedAccounts = accounts.map(currentAccount => currentAccount.id === account.id ? {...currentAccount, connections: [...currentAccount.connections, user]} : currentAccount);

            accountDispatch({type: "SET_ACCOUNTS", value: updatedAccounts});
            userDispatch({type: "UPDATE_USER", value: {...user, connections: [...user.connections, {id: account.id, name: account.name}]}});
        }
    }
    
    return (
        <div className="page-layout">
            <NavBar />
            <main className="feed-body d-flex justify-content-evenly gap-3 p-3">
                <Sidebar />
                <div className="content-section d-flex flex-column gap-3 w-50 flex-grow-1">
                    <div className="accounts-display">
                        <ul className="posts-body d-flex flex-column position-static gap-2">
                            {
                            accounts.sort((account)=>isUserConnected(account) ? -1 : 1).map(account=>{ return (
                            <li className="post bg-white p-3 d-flex gap-2 rounded">
                                <div className="feed-avatar">
                                    <Link className="avatar-image d-flex justify-content-center" to="/profile">
                                        <img src={account.image} className=" img-fluid rounded-circle w-50" alt="avatar" />
                                    </Link>
                                </div>
                                <div className="post-body d-flex justify-content-between flex-grow-1">
                                    <div className="post-user-title d-flex flex-column">
                                        <span className="fs-5 fw-bolder">{account.name}</span>
                                        <small>{account.connections.length} connections</small>
                                    </div>
                                    { isUserConnected(account) ? 
                                        <button className="btn btn-primary rounded-pill  align-self-center" onClick={()=>{updateUser(account)}}>Connected</button>
                                    :    <button className="btn btn-outline-primary rounded-pill align-self-center" onClick={()=>{updateUser(account)}}>Connect</button>   
                                    }
                                </div>
                            </li>
                            )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <AccountSidebar />
            </main>
        </div>
    )
}

export { AccountsSuggestion }