import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Form from "./Form";
import Messages from "./Messages";
import Timer from './Timer';


function App() {
    const [page, setPage] = useState("/")
    
    return (
        <>
        <div>
        <NavBar onChangePage={setPage} />
        <Switch>
            <Route path="/rsvp" element={<Form />}/>
            <Route path="/messages" element={<Messages />}/>
            <Route path="/" element={<Home />}/>

        </Switch>
        </div>

        <div className="countdown">
            <Timer duration={}
        </div>
        </>
    );
}

export default App;



