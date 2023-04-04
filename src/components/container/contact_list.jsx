import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactList = () => {

    const defaultContact = new Contact('Miguel', 'Torres', 'miguetorres30@gmail.com', true);

    return (
        <div>
            <ContactComponent contact={ defaultContact } ></ContactComponent>
        </div>
    );
}

export default ContactList;
