import React from "react";


const ContactRow = (props) => {
    const element = props.element;
    console.log('hiiiiiiii')
    return (
        <tr>
            <td>{element.name}</td>
            <td>{element.phone}</td>
            <td>{element.email}</td>
        </tr>
    )
}

export default ContactRow