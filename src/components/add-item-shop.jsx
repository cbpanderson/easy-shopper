import React from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

import {addItemShop} from '../actions.js';

class AddItemShop extends (React.Component) {
    constructor(props) {
        super(props);

        this.state = {item: ''};
    }

    handleSubmit(event) {
        console.log(event);
        event.preventDefault();

        this.props.addItemShop({name: this.state.item});
        this.setState({item: ''});
    }

    updateItem(event) {
        this.setState({item: event.target.value});
    }

    go_back(event) {
        this.props.history.push('/shop');
    };
    
    render() {
        return (
          <form onSubmit={(e) => this.handleSubmit(e) }>
            <Card style={{
                width:'20%', 
                marginLeft: '40%', 
                paddingLeft: '2%',
                marginTop: '2%'}}>
                <CardContent>
                    <h2 style={{color:'#00838f'}}>Add To Shopping List</h2>
                    <TextField label="peanut butter?" value={this.state.item} onChange={(e) => this.updateItem(e)}/>
                </CardContent>
                <CardActions>
                    <Button type="button" onClick={(e) => this.go_back()}>List</Button>
                    <Button type="submit">Add</Button>
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
        addItemShop: function (data) {
            dispatch(addItemShop(data))
        }
    }
}

var ConnectedAddItem = connect(mapStateToProps, mapDispatchToProps)(AddItemShop);
export default ConnectedAddItem;