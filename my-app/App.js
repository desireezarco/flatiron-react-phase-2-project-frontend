import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Form from "./Form";
import Messages from "./Messages";


function App() {
    const [page, setPage] = useState("/")
    
    return (
        <div>
        <NavBar onChangePage={setPage} />
        <Switch>
            <Route path="/rsvp">
                <Form />
            </Route>
            <Route path="/messages">
                <Messages />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
        </div>
    );
}

export default App;



