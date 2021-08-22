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
import ConnectedTheUsual from './components/the-usual';
import store from './store.js';
import AddItemShop from './components/add-item-shop';
import AddItemUsual from './components/add-item-usual';
import ConnectedHome from './components/home';

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
                  <Box style={{marginLeft:'75%'}} display="flex" alignItems="center">
                   <Box style={{width: '250px'}}>
                    <Link style={{textDecoration:'none'}} to="/">Home</Link>
                    <Link style={{textDecoration:'none', marginLeft:'8%'}} to="/shop">Shopping List</Link>
                    <Link style={{textDecoration:'none', marginLeft:'8%'}} to="/usual">The Usual</Link>
                   </Box>
                  </Box>
                </Toolbar>
            </AppBar>
            <div>

            </div>
            <Switch>
              <Route exact path="/" component={ConnectedHome}/>
              <Route exact path="/shop" component={ConnectedShoppingList}/>
              <Route exact path="/usual" component={ConnectedTheUsual}/>
              <Route exact path="/addShop" component={AddItemShop}/>
              <Route exact path="/addUsual" component={AddItemUsual}/>
              <Route component={NoMatch}/>
            </Switch>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </Provider>  
  );
}

export default App;
