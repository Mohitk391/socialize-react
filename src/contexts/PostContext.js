import { createContext, useContext, useReducer, useEffect } from "react";
import { PostReducer } from "../reducers/PostReducer";
import {users} from "../data/users";

const PostContext = createContext();

const initialState = {
    posts: [],
}

const PostProvider = ({children}) => {
    const [postState, postDispatch] = useReducer(PostReducer, initialState);

    useEffect(() => {
        const initialPosts = users.flatMap((user)=>{
            const postArray = user.posts;
            if(postArray.length>0){
                    return postArray;
                }
            return [];
            }
            
        );
        postDispatch({type:"SET_POSTS", value: initialPosts});
    }, [])
    

    return (<PostContext.Provider value={{postState, postDispatch}}>
        {children}
    </PostContext.Provider>)
}

const usePost = () => useContext(PostContext);

export {PostProvider, usePost};