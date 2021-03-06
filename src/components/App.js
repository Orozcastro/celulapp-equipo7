import React from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import RegistrarCelular from "./RegistrarCelular";
import CelularDetalle from "./CelularDetalle";
import FiltroMarca from "./FiltroMarca";
import CelularesList from "./CelularesList";
import FiltroSO from "./FiltroSO";
import FiltroRam from "./FiltroRam";
import ModificarCelular from "./ModificarCelular";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/agregar-celular" component={RegistrarCelular} />
        <Route path="/todos-los-celulares" component={CelularesList} />
        <Route path="/marca/:marca" component={FiltroMarca} />
        <Route path="/so/:so" component={FiltroSO} />
        <Route path="/ram/:ram" component={FiltroRam} />
        <Route
          path="/details/:id"
          render={(props) => <CelularDetalle {...props} />}
        />
        <Route 
            path="/modificarcelular/:id"
            render={(props) => <ModificarCelular {...props} />} 
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
