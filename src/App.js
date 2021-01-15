import "./App.css";
import Website from "./WebsiteComponents/Website";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./WebsiteComponents/About";
import Contact from "./WebsiteComponents/Contact";
import PoliticDB from "./WebsiteComponents/PoliticDB";
import Portfolio from "./WebsiteComponents/Portfolio";
import Navigation from "./WebsiteComponents/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Website}></Route>
          <Route
            path="/WebsiteComponents/About"
            exact
            component={About}
          ></Route>
          <Route path="/WebsiteComponents" exact component={Website}></Route>
          <Route
            path="/WebsiteComponents/Contact"
            exact
            component={Contact}
          ></Route>
          <Route
            path="/WebsiteComponents/PoliticDB"
            exact
            component={PoliticDB}
          ></Route>
          <Route
            path="/WebsiteComponents/Portfolio"
            exact
            component={Portfolio}
          ></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
