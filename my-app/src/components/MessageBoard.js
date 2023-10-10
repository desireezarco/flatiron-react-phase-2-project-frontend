import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Messages from '../pages/Messages';

function MessageBoard (){
    const [message, setMessages] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/guests')
        .then(res => res.json())
        .then(data => setMessages(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <ul>
                <Messages />
                {message.map((message, index)=> (
                    <li key={index}>From {message.name} : {message.message}</li>
                ))}
            </ul>
        </div>
    )
}

export default MessageBoard;