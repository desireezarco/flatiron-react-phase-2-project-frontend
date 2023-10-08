import { useState } from 'react';
import React from 'react';

const RSVP = () => {
    const [title, setTitle] = useState();
    
    return (
        <div className='form'>
        <h2>RSVP Here</h2>
        <form>
            <label>RSVP</label>
            <input 
                type='text'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            <label>RSVP 2</label>
            <textarea
                required
                ></textarea>
            <label>RSVP 3</label>
            <select>
                <option value="mario">Mario</option>
                <option value="yoshi">Yoshi</option>
            </select>
            <button>Submit</button>
        </form>
    </div>
)
}

export default RSVP;