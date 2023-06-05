import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import "./FormController.css"
import { editContact, postContact } from '../../JS/actions/contacts';
import { Link } from 'react-router-dom';


const FormController = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState({name:"",email:"",phone:""})
  // console.log("User : " , user)
    const edit = useSelector((state)=>state.editReducer.edit)
    const userReducer = useSelector((state)=>state.contactReducer.user)
    // console.log("userReducer : " , userReducer)

    useEffect(()=>{
      edit ? setUser(userReducer) : setUser({name:"",email:"",phone:""})
    },[userReducer , edit])

    const handleContact = ()=>{
      if(edit){
        dispatch(editContact(userReducer._id , user))
      }else{
        dispatch(postContact(user))
      }
    }

    const handleChange = (e)=>{
      setUser({...user , [e.target.name] : e.target.value})
    }

  return (
    <Form className='form-control'>
    <Form.Field>
      <label>Full Name</label>
      <input placeholder='Enter Full Name' value={user.name} name='name' onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Enter Email' value={user.email} name='email' onChange={handleChange}/>
    </Form.Field>
    <Form.Field>
      <label>Phone</label>
      <input placeholder='Enter Phone Number'  value={user.phone} name='phone' onChange={handleChange}/>
    </Form.Field>
   <Link to="/contacts"> <Button color='green' onClick={handleContact} >  {edit? "Edit" : "Save"} </Button></Link>
  </Form>
  )
}

export default FormController