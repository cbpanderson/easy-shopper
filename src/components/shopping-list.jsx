import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

import { deleteItemShop } from '../actions.js';
import { toggleCheckedShop } from '../actions.js';

class ShoppingList extends (React.Component) {
    
handleChange(event, index){
    this.props.toggleCheckedShop({index});
}

handleDelete(event) {
  this.props.deleteItemShop({});
}


    render() {
      //update global variable or local variable to say list = shopping-list
        return (
          <div style={{display:'flex'}}>
            <Card style={{width:'20%', marginLeft: '40%', paddingLeft: '4%'}}>
              <CardContent>
                <h2>Shopping List</h2>
                <ul>
                  {this.props.shopping_list.map((item, index) => {
                    return <li style={{listStyleType:'none'}} key = {index}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={item.checked}
                              onChange={(e) => this.handleChange(e, index)}
                              color="primary"
                            />
                          }
                          label={item.name}
                        />
                    </li>;
                  })}
                </ul>
              </CardContent>
              <CardActions>
                  <Button component={Link} to="/addShop"><AddIcon /></Button>
                  <Button component={Link} to="/shop"><DeleteIcon  onClick={(e) => this.handleDelete(e)}/></Button>
                  
              </CardActions>
            </Card>
          </div>
        );
    }
}

//reads data from state(component) and maps to this.props.shopping_list
function mapStateToProps(state) {
    return {shopping_list: state.shopping_list}; 
}
//writes data to store
function mapDispatchToProps (dispatch) {
    return {
        toggleCheckedShop: function (data) {
            dispatch(toggleCheckedShop(data))
        },
        deleteItemShop: function (data) {
          dispatch(deleteItemShop(data))
      }
    }
}

var ConnectedShoppingList = connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
export default ConnectedShoppingList;