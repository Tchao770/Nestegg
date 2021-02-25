import Header from "./components/Header";
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mortgage from "./pages/Mortgage";
import RealEstate from "./pages/RealEstate";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/mortgage" component={Mortgage} />
          <Route path="/realestate" component={RealEstate} />
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
