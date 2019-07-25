import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />    
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />   
        </Switch>
       
      </div>
    </Router>

  );
}

export default App;
