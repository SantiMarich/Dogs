import "./App.css";
import { Route, useLocation } from "react-router-dom";
import { Home, Landing, Form, Detail } from "./views/Views";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/create" component={Form} />
      <Route exact path="/detail/:id" component={Detail} />
    </div>
  );
}

export default App;
