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
          <Route path="/About" component={About} />

          <Route path="/contact" component={Contact} />
          <Route path="/restaurants/:name" children={<Restaurants />}>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
