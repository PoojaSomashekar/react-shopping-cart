import { Fragment } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import './App.css';
import Cart from './components/Cart/Cart';
import HeaderTool from './components/HeaderTool/HeaderTool';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Whilst from './components/Whilst/Whilst';

function App() {
  return (
    <Fragment>
      <Router>
        <HeaderTool />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/whilst" component={Whilst} />
            <Route path="/cart" component={Cart} />
            <Route path="/products" component={Products} />
          </Switch>
        </main>
      </Router>
    </Fragment>

  );
}

export default App;
