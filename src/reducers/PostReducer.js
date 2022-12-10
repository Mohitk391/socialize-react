const PostReducer = (postState, action) => {
    switch (action.type){
        case "ADD_POST":
            return { ...postState, posts: [...postState.posts, action.value]}
        case "SET_POSTS":
            return {...postState, posts: action.value}
        case "UPDATE_POST":
            return {...postState, posts: postState.posts.map(post => 
                { return   post.id===(action.value).id ? {...post , bookmarked : !((action.value).bookmarked)} 
            : post})}
        default:
            return postState;

    }
}

export {PostReducer}