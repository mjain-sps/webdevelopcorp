import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ServicesPage from "./Pages/ServicesPages/ServicesPage";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/services" component={ServicesPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
