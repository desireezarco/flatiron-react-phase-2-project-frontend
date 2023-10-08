import { useState, useEffect } from 'react';

const Messages = () => {
   const [message, setMessage] = useState([]);

   useEffect(() => {
      fetch('http://localhost:3000/guests')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setMessage(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
    <div className="messages">
    <h1>Messages</h1>

</div>
   );
};

export default Messages;


