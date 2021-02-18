import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Menu, Restaurants } from "./pages";
import { Navbar, Footer } from "./components";
import Form from "./components/Form"

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/restaurants/:name" children={<Restaurants />}>
          </Route>
        </Switch> 
        <Form />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
