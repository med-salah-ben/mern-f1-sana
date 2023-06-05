import {combineReducers} from "redux";
import { contactReducer } from "./contactReducer";
import { editReducer } from "./editReducer";

export const rootReducer = combineReducers({contactReducer , editReducer})