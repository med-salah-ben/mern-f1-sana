import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, Image } from 'semantic-ui-react'
import {getContact , deleteContact} from "../../JS/actions/contacts"
import { toggleTrue } from '../../JS/actions/edit';
import { Link } from 'react-router-dom';


const ContactCard = ({contact}) => {
  const dispatch = useDispatch();

  const handleContact = (id)=>{
    dispatch(getContact(id))
  } 
  const handleDelete = (id)=>{
    dispatch(deleteContact(id))
  }

  const handleTrue=()=>{
    dispatch(toggleTrue())
  }

  return (
    <div>
            <Card style={{margin:"1rem"}}>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://icon-library.com/images/user-icon-jpg/user-icon-jpg-28.jpg'
        />
        <Card.Header> {contact.name} </Card.Header>
        <Card.Meta> {contact.email} </Card.Meta>
        <Card.Description>
         <strong>216</strong>{contact.phone}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Link to="/edit">
          <Button basic color='green' onClick={()=>{handleContact(contact._id);handleTrue()}}>
            Edit
          </Button>
          </Link>
          <Button basic color='red' onClick={()=>handleDelete(contact._id)}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
    </div>
  )
}

export default ContactCard