import {EDIT_CONTACT, GET_CONTACTS_FAIL , GET_CONTACTS_LOAD ,GET_CONTACTS_SUCCESS, GET_ONE_CONTACT} from "../constant/actionsTypes";
import axios from "axios";

export const getContacts = ()=>async (dispatch)=>{
    dispatch({type:GET_CONTACTS_LOAD});
    try {
        let result = await axios.get("/api/contact")
        console.log("result : ",result)
        dispatch({type:GET_CONTACTS_SUCCESS , payload:result.data.response})
    } catch (error) {
        dispatch({type:GET_CONTACTS_FAIL , payload:error})
        console.log(error)
    }    
}

export const getContact = (id)=>async (dispatch)=>{
    try {
        const result = await axios.get(`/api/contact/${id}`)
        dispatch({type:GET_ONE_CONTACT , payload:result.data.response})
    } catch (error) {
        console.log(error)
    }
}

export const deleteContact = (id)=>async (dispatch)=>{
    try {
        await axios.delete(`/api/contact/${id}`)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}

export const editContact = (id,formData)=>async(dispatch)=>{
    try {
        const result = await axios.put(`/api/contact/${id}`, formData)
        dispatch({type:EDIT_CONTACT , payload:result.data.msg })
    } catch (error) {
        console.log(error)
    }
}


export const postContact =(formData) => async(dispatch)=>{
    try {
        await axios.post("/api/contact/newcontact",formData)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}