import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../../JS/actions/contacts';
import ContactCard from '../ContactCard/ContactCard';
import "./contactsList.css";

const ContactsList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector((state)=>state.contactReducer.contacts);
    const loadContacts = useSelector((state)=>state.contactReducer.loadContacts);

    useEffect(()=>{
        dispatch(getContacts())
    },[])

  return (
    <div className='contacts-container'>
        {loadContacts ? (<h1>Loading....</h1>): contacts.length === 0 ? (<h2>there is no data</h2>) : (
            contacts.map((el)=><ContactCard key={el._id} contact={el} />)
        )}
    </div>
  )
}

export default ContactsList