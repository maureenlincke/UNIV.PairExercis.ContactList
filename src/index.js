import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import ContactList from './ContactList';

const Main = () => {
  const [contacts, setContacts] = useState([]);
  const getContacts = async () => {
    try{  
      const response = await fetch('http://jsonplace-univclone.herokuapp.com/users');
      const people = await response.json();
      console.log("Got contacts", people);
    }
    catch(err){
      console.log("There was an error", err);
    }
  }
  
  useEffect(() => {
    getContacts();
  }, []); 
  console.log(contacts)
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        <ContactList contacts = {contacts}/>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
