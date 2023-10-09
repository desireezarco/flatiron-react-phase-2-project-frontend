import { useState, useEffect } from 'react';
import Form from "./Form";

const Messages = () =>{
    const [messages, setMessage] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:3000/guests')
        .then(response => {
            return response.json()
        }) 
    }, [])

// return (
//     <div className='messages'>
//         {Messages && <Messages messages={messages} />}
//     </div>
// )
}

export default Messages;