import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import ConnectedShoppingList from './components/shopping-list';
import TheUsual from './components/the-usual';
import store from './store.js';
import AddItem from './components/add-item';

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
                  <Box style={{marginLeft:'80%'}} display="flex" alignItems="center">
                   <Box flexGrow={1}>
                    <Link to="/">Shopping List</Link>
                    <Link to="/saved">The Usual (Stored List)</Link>
                   </Box>
                  </Box>
                </Toolbar>
            </AppBar>
            <div>

            </div>
            <Switch>
              <Route exact path="/" component={ConnectedShoppingList}/>
              <Route exact path="/saved" component={TheUsual}/>
              <Route exact path="/add" component={AddItem}/>
              <Route component={NoMatch}/>
            </Switch>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </Provider>  
  );
}

export default App;
