import { TOGGLE_TRUE , TOGGLE_FALSE } from "../constant/editTypes";

export const toggleTrue=()=>{
    return {
        type:TOGGLE_TRUE
    }
}

export const toggleFalse=()=>{
    return {
        type:TOGGLE_FALSE
    }
}