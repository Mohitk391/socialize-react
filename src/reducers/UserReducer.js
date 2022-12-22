const UserReducer = (userState, action) => {
    switch(action.type){
        case "SET_USER":
            return {...userState, user: action.value, isUserLoggedIn: true};
        case "UNSET_USER":
            return {...userState, user: null, isUserLoggedIn: false};
        case "UPDATE_USER":
            return {...userState, user: action.value};
        default: 
            return userState;
    }
}

export {UserReducer}