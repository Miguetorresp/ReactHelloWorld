import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact }) => {

    const [connecting, setConnecting] = useState(contact.connecting);
    const change = () => {
        //Actualizamos el state
        const respConnecting = !connecting;
        setConnecting(respConnecting)
        contact.connecting = respConnecting;
    }

    return (
        <div>
           <h1>Contact</h1>
           <p>Name: {contact.name}</p> 
           <p>Last Name: {contact.lastName}</p> 
           <p>Email: {contact.email}</p> 
           <p>State: {connecting ? 'Contact OnLine':'Contact Disabled'}</p> 
        

            <button onClick={ ()=> setConnecting(!connecting) } >change</button>


        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
