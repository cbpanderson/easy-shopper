import ConnectedShoppingList from './components/shopping-list';
import TheUsual from './components/the-usual';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';

const NoMatch = ({ location }) => {
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <AppBar position="relative">
              <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                  Easy Shopper App
                </Typography>
              </Toolbar>
          </AppBar>
          <div>
            <ul>
              <li><Link to="/">Shopping List</Link></li>
              <li><Link to="/saved">The Usual (Stored List)</Link></li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/" component={ConnectedShoppingList}/>
            <Route exact path="/saved" component={TheUsual}/>
            <Route component={NoMatch}/>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>  
  );
}

export default App;
