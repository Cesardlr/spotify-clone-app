// Here I'm setting up the initial state of the app
export const initialState = {
    user:null,
    playlist: [],
    playing: false,
    item:null,
    token: null
}

// The action is the state that the app is and the action is for manipulating that state, like set the user or set the playlist,etc.
// The action has 2 things: Action -> type, payload
const reducer = (state, action) =>{
    console.log(action)

    // Here I'm doing a switch with the action type that detects when a change is done to the state of the element that changed, then I'm going to keep everything on the state as it is and then changing the state element that changed, in this case the user
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

            // If nothing happens we are going to keep the state as it is
            default:
                return state;
    }
}

export default reducer;