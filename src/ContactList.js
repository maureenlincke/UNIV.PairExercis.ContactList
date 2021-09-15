import React from 'react';
import ContactRow from './ContactRow';

const ContactList = (props) => {
  console.log(props.contacts)
    return (
        <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
              
              { props.contacts.map(element => {
                console.log("hiiiiiiii")
                  return(
                    <ContactRow key = {element.id} element = {element}/>)})}
            </tbody>
          </table>
    )
}

export default ContactList