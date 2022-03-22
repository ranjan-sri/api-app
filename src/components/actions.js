import userActionTypes from "./types";


export const getUsersStart = () =>{
    return {
        type: userActionTypes.GET_USERS_START,
    }
}

export const getUsersSuccess = (users)  => {
    return {
        type: userActionTypes.GET_USERS_SUCCESS,
        payload: users
    }
}

export const getUsersFail = (error) => {
    return {
        type: userActionTypes.GET_USERS_FAIL,
        payload: error
    }
}

export const getUserStart = () =>{
    return {
        type: userActionTypes.GET_USER_START,
    }
}
export const getUserSuccess = (user)  => {
    return {
        type: userActionTypes.GET_USER_SUCCESS,
        payload: user
    }
}

export const getUserFail = (error) => {
    return {
        type: userActionTypes.GET_USER_FAIL,
        payload: error
    }
}