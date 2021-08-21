import React from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

import {addItemUsual} from '../actions.js';

class AddItemUsual extends (React.Component) {
    constructor(props) {
        super(props);

        this.state = {item: ''};
    }

    handleSubmit(event) {
        console.log(event);
        event.preventDefault();

        this.props.addItemUsual({name: this.state.item});
        this.setState({item: ''});
    }

    updateItem(event) {
        this.setState({item: event.target.value});
    }

    go_back(event) {
        this.props.history.push('/');
    };
    
    render() {
        return (
          <form onSubmit={(e) => this.handleSubmit(e) }>
            <Card>
                <CardContent>
                    <TextField label="Item Name" value={this.state.item} onChange={(e) => this.updateItem(e)}/>
                </CardContent>
                <CardActions>
                    <Button type="button" onClick={(e) => this.go_back()}>Back to List</Button>
                    <Button type="submit">Add Item</Button>
                </CardActions>
            </Card>
          </form>  
        );
    }
}

//reads data from state(component) and maps to this.props.shopping_list
function mapStateToProps(state) {
    return {}; 
}
//writes data to store
function mapDispatchToProps (dispatch) {
    return {
        addItemUsual: function (data) {
            dispatch(addItemUsual(data))
        }
    }
}

var ConnectedAddItem = connect(mapStateToProps, mapDispatchToProps)(AddItemUsual);
export default ConnectedAddItem;