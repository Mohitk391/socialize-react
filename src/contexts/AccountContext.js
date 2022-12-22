import { createContext, useContext, useEffect, useReducer } from "react";
import { users } from "../data/users";
import { AccountReducer } from "../reducers/AccountReducer";

const AccountContext = createContext();

const initialState = {
    accounts : []
}

const AccountProvider = ({children}) => {
    const [accountState, accountDispatch] = useReducer(AccountReducer, initialState);

    useEffect(() => {
        const suggestedAccounts = users.reduce((acc,curr)=>{
            return [...acc, {id: curr.id, name: curr.name, image: curr.profilePictureSource, mobile: curr.mobile, email: curr.email, connections: curr.connections}]
        },[]);
        accountDispatch({type: "SET_ACCOUNTS", value: suggestedAccounts});
    }, []);

    return (<AccountContext.Provider value={{accountState, accountDispatch}}>
        {children}
    </AccountContext.Provider>)
}

const useAccount = () => useContext(AccountContext);

export {AccountProvider, useAccount}