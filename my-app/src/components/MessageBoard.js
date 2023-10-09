// // import React, { Component } from 'react';
// // import Messages from 'my-app/db.json';

// // function MessageBoard() {
// //         return (
// //             <div>
// //                 <Messages />
// //             </div>
// //         )
// // }

// // export default MessageBoard;

// import { useState, useEffect } from 'react'
// import React from 'react';

// const MessageBoard = () => {
    // const [messages, setMessage] = useState(null);
    
    // useEffect(()=>{
        //     fetch('http://localhost:3000/guests')
        //     .then(response => {
            //         return response.json()
            //     }) 
            //     .then(data =>{
                //         setMessage(data);
                //     })
                // }, [])



import React from 'react';
import Messages from '../pages/Messages';
                
    const MessageBoard = () => {
                
    return (
        <div>
        <h1>Hello</h1>
        <h2>{Messages.name}</h2>   
        </div>
)}

export default MessageBoard;


// import { useState, useEffect } from 'react'
// import Messages from '../pages/Messages';

// function MessageBoard() {
//   const [items, setItems] = useState([])

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((res) => res.json())
//       .then((resJson) => {
//         const data = JSON.parse(resJson)
//         setItems(data)
//     })
//   }, [])

//   return  (
//     items.map((item) => <SubComponent key={item.id} title={item.title} />)
//   )
// }