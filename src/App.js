import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ServicesPage from "./Pages/ServicesPages/ServicesPage";
import Websites from "./Pages/ServicesDetails/WebSites/Websites";
import EnterpriseSol from "./Pages/ServicesDetails/EnterprisesSolution/EnterpriseSol";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/services" component={ServicesPage} />
        <Route exact path="/websites" component={Websites} />
        <Route
          exact
          path="/web-application-enterprise-solution"
          component={EnterpriseSol}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
