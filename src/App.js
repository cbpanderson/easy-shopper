import ConnectedShoppingList from './components/shopping-list';
import TheUsual from './components/the-usual';
import store from './store.js';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

const NoMatch = ({ location }) => {
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
}

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <BrowserRouter>
            <AppBar position="relative">
                <Toolbar>
                  <Typography variant="h6" color="inherit" noWrap>
                    Easy Shopper
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
      </ThemeProvider>
    </Provider>  
  );
}

export default App;
