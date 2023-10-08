import { useState } from 'react';
import React from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [food, setFood] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault(); 
        const form = { name, email, food}
        console.log(form)
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
        <h1>Join Us On Our Special Day!</h1>
        <h2>RSVP Here</h2>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input 
                type='text'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            <label>Email:</label>
            <input 
                type='text'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
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