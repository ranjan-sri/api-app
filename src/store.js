import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import reducer from './reducer';
import { usersSaga } from "./components/saga";

const sagaMiddeleWare = createSagaMiddleware();
const middleWare = [sagaMiddeleWare, logger];

export const store= createStore(reducer, applyMiddleware(...middleWare));
sagaMiddeleWare.run(usersSaga);