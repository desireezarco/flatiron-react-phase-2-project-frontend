import { useState } from 'react';
import React from 'react';

//set useState for each value
const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [food, setFood] = useState('');

//handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault(); 
        const form = { name, email, message, food}
        console.log(form)

//using POST fetch request
        fetch('http://localhost:3000/guests',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }).then(() => {
            console.log('new form added')
        })
    }
    
    return (
        <div className='form'>
        <h2>Join Us On Our Special Day!</h2>
        <h4>RSVP Here</h4>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input 
                type='text'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}/>

            <label>Email:</label>
            <input 
                type='text'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>

            <label>Message for the Bride & Groom:</label>
            <input 
                type='text'
                value={message}
                onChange={(e) => setMessage(e.target.value)}/>

            <label>Dinner Choice:</label>
            <select
                value={food}
                onChange={(e) => setFood(e.target.value)}>
                <option></option>
                <option value="steak and mushrooms">Steak and mushrooms</option>
                <option value="salmon and veggies">Salmon and veggies</option>
                <option value="seafood pasta">Seafood Pasta</option>
            </select>
            <button>Submit</button>
        </form>
    </div>
)
}

export default Form;