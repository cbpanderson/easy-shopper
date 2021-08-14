import React from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class ShoppingList extends (React.Component) {
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
                                        // onChange={handleChange}
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

var ConnectedShoppingList = connect(mapStateToProps)(ShoppingList);
export default ConnectedShoppingList;