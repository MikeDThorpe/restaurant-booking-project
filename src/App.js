import './styles/App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Menu, Restaurants } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/restaurants" component={Restaurants} />
          {/* Setup dymanic routing for restaurant pages  */}
          {/* <Route path="/restaurants">
            <Route path="/antarctic" component={Restaurants} />
            <Route path="/arctic" component={Restaurants} />
            <Route path="/sahara" component={Restaurants} />
            <Route path="/arabian" component={Restaurants} />
            <Route path="/gobi" component={Restaurants} />
          </Route>*/}
        </Switch> 
      </Router>
    </div>
  );
}

export default App;