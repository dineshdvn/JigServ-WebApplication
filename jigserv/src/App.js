import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Ex from './Components/Responsive'

class App extends React.Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/"><Ex/></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
