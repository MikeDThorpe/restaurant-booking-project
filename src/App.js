import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Menu, Restaurants, Contact, About } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          {/* Setup dymanic routing for restaurant pages  */}
          <Route path="/restaurants">
            <Route path="/antarctic" component={Restaurants} />
            <Route path="/arctic" component={Restaurants} />
            <Route path="/sahara" component={Restaurants} />
            <Route path="/arabian" component={Restaurants} />
            <Route path="/gobi" component={Restaurants} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
