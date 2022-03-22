import userActionTypes from "./components/types";

const INITIAL_STATE = {
    usersLoading: false,
    usersLoaded: false,
   users: [],
}
const reducer = (state=INITIAL_STATE, action) => {
     switch(action.type){
         case userActionTypes.GET_USERS_START:
             return {
                 ...state,
                 usersLoading: true,
             }
        case userActionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                usersLoading: false,
                usersLoaded: true,
            } 
        case userActionTypes.GET_USERS_FAIL:
             return {
                 ...state,
                 usersLoading: false,
                 usersLoaded: false,
             }    
        default:
            return state;
     }

}

export default reducer;