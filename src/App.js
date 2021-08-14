import ShoppingList from './components/shopping-list';
import TheUsual from './components/the-usual';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

const NoMatch = ({ location }) => {
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
}

function App() {
  return (
    <div className="App">
      <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Easy Shopper App
            </Typography>
          </Toolbar>
      </AppBar>

        <BrowserRouter>
          <div>
            <ul>
              <li><Link to="/">Shopping List</Link></li>
              <li><Link to="/saved">The Usual (Stored List)</Link></li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/" component={ShoppingList}/>
            <Route exact path="/" component={TheUsual}/>
            <Route component={NoMatch}/>
          </Switch>
        </BrowserRouter>
    </div>
    
  );
 
}

export default App;
