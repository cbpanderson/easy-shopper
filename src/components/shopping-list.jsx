import React from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {toggleChecked} from '../actions.js';

class ShoppingList extends (React.Component) {
    
handleChange(event, index){
    // console.log(event.target.value, index);
    this.props.toggleChecked({index});
}

    render() {
        return (
            <Card>
              <CardContent>
                    <ul>
                        {this.props.shopping_list.map((item, index) => {
                            return <li key = {index}>
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
                  <Button>Add Item</Button>
              </CardActions>
            </Card>
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
        toggleChecked: function (data) {
            dispatch(toggleChecked(data))
        }
    }
}

var ConnectedShoppingList = connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
export default ConnectedShoppingList;