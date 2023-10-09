// import React, { Component } from 'react';
// import Messages from 'my-app/db.json';

// function MessageBoard() {
//         return (
//             <div>
//                 <Messages />
//             </div>
//         )
// }

// export default MessageBoard;

import { useState, useEffect } from 'react'
import Messages from '../pages/Messages';

const MessageBoard = () => {
    const [messages, setMessage] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:3000/guests')
        .then(response => {
            return response.json()
        }) 
        .then(data =>{
            setMessage(data);
        })
    }, [])

return (
    <div>
        <h1>Hello</h1>
        <Messages />
    </div>
)}

export default MessageBoard;