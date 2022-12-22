const AccountReducer = (accountState, action) => {
    switch(action.type){
        case "SET_ACCOUNTS":
            return {...accountState, accounts: action.value};
        default: 
            return accountState;
    }
}

export {AccountReducer}