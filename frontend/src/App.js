// Configuring the styles of the app
import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import PrimeReact from "primereact/api";

// Importing the needed components
import Home from "./views/Home";
import GramSchmidtProcess from "./views/GramSchmidtProcess";

// Handling Routing
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Importing the store
import store from "./redux/store";
import { Provider } from "react-redux";

// import the layout components
import Navbar from "./navigation/Navbar";
import Banner from "./views/Home/components/Banner";

function App() {
  // Config
  PrimeReact.ripple = true;

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App-header">
          <Navbar />
        </div>
        <div className="App-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/gram-schmidt-process"
              component={GramSchmidtProcess}
            />
          </Switch>
        </div>
        <div className="App-footer">
          <Banner />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
