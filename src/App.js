import Header from "./components/Header";
import './App.scss';
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mortgage from "./pages/Mortgage";
import RealEstate from "./pages/RealEstate";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Switch>
          <Route path="/Nestegg/home" component={Home} />
          <Route path="/Nestegg/mortgage" component={Mortgage} />
          <Route path="/Nestegg/realestate" component={RealEstate} />
          <Route path="/Nestegg/about" component={About}/>
          <Route path="/Nestegg/contact" component={Contact} />
        </Switch>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
