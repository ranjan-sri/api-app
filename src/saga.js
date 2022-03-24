import { call, put, takeLatest,all } from "redux-saga/effects";
import userActionTypes from "./types";
import { getUsersSuccess, getUsersFail } from "./actions";

const time = 4000;
const delay = (time) => {
    var d1 = new Date();
    var d2 = new Date();
    while (d2.valueOf() < d1.valueOf() + time) {
      d2 = new Date();
    }
  }

export function* getUsers(){
    const url = "https://jsonplaceholder.typicode.com/users";
  try{
    
    const response = yield fetch(url);
    const users = yield response.json();
    delay(time);
    yield put(getUsersSuccess(users));
   } catch(error) {
    yield put(getUsersFail(error));
   }
}


export function* onGetUsersStart() {
    yield takeLatest(userActionTypes.GET_USERS_START,getUsers)
}



export function* usersSaga() {
    yield all([call(onGetUsersStart)]);
}