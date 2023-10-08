import { useState } from 'react';
import React from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault(); 
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
            <textarea
                required
                ></textarea>
            <label>Dinner Choice:</label>
            <select>
                <option value="steak and mushrooms">Steak and mushrooms</option>
                <option value="salmon and veggies">Salmon and veggies</option>
                <option value="pasta">Pasta</option>
            </select>
            <button>Submit</button>
        </form>
    </div>
)
}

export default Form;