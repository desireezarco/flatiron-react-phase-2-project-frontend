import { useState, useEffect } from 'react';
// import Form from "./Form";

const Messages = () =>{
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
    <div className='messages'>
        
    </div>
)
}

export default Messages;