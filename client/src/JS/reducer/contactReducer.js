import {EDIT_CONTACT, GET_CONTACTS_FAIL , GET_CONTACTS_LOAD , GET_CONTACTS_SUCCESS, GET_ONE_CONTACT}from "../constant/actionsTypes";

const initialState = {
    loadContacts : false,
    contacts : [],
    user : {},
    edit:"",
    errors : null
}

export const contactReducer = (state=initialState , {type , payload})=>{
    switch (type) {
        case GET_CONTACTS_LOAD:
            return {...state , loadContacts:true}
        case GET_CONTACTS_SUCCESS:
            return {...state , loadContacts:false , contacts:payload}
        case GET_CONTACTS_FAIL:
            return {...state, loadContacts:false , errors:payload}
        case GET_ONE_CONTACT:
            return {...state , user:payload}
        case EDIT_CONTACT:
            return {...state , edit:payload}
    
        default:
            return state;
    }
}