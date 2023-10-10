import React, { useState } from 'react';


const Messages = () => {
    // const [messages, setMessage] = useState(null);

fetch('http://localhost:3000/guests',{
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
}).then(response => {
    return response.json()
})
    .then(data => console.log(data))

    return (
        <div className="message">
        <h1>Message Board</h1>
        </div>
    )
}


export default Messages;