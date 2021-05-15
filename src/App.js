import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact to="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
