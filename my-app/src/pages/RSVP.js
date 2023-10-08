import { useState } from 'react';
import React from 'react';

const RSVP = () => {
    const [title, setTitle] = useState();
    
    return (
        <div className='form'>
        <h1>Join Us On Our Special Day!</h1>
        <h2>RSVP Here</h2>
        <form>
            <label>Name:</label>
            <input 
                type='text'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            <label>Email:</label>
            <textarea
                required
                ></textarea>
            <label>Dinner Choice:</label>
            <select>
                <option value="steak and mushrooms">Steak and mushrooms</option>
                <option value="salmon and veggies">Salmon and veggies</option>
            </select>
            <button>Submit</button>
        </form>
    </div>
)
}

export default RSVP;