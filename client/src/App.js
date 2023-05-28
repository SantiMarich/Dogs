import "./App.css";
import { Route } from "react-router-dom";
import { Home, Landing, Form, Detail } from "./views/Views";

function App() {
  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/create" component={Form} />
      <Route exact path="/detail/:id" component={Detail} />
    </div>
  );
}

export default App;
