import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

// import Button from '@material-ui/core/Button';
import TheUsual from './the-usual';
import { moveUsualToShop } from '../actions.js';
import { Button } from '@material-ui/core';

// import background from 'C:/Program Files/Git/dc_projects/easy-shopper/public/notebook_paper.jpg';

class Home extends (React.Component) {
    handleMoveToShop(event){
        this.props.moveUsualToShop(this.props.the_usual);
    }

    render() {
        return (
            
            <div >
             {/* style={{ backgroundImage: `url(${background})` }} */}
                <h2>Here are all of your staples. Click Add to Shopping List to dump them in your list and keep shopping!</h2>
                <TheUsual></TheUsual>
                <Button component={Link} to="/shop" onClick={(e) => this.handleMoveToShop(e)}>Send to Shopping List</Button>
            </div>
        );
    }
}

//reads data from state(component) and maps to this.props.shopping_list
function mapStateToProps(state) {
    return {the_usual: state.the_usual}; 
}
//writes data to store
function mapDispatchToProps (dispatch) {
    return {
        moveUsualToShop: function (data) {
            dispatch(moveUsualToShop(data))
        }
    }
}

var ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ConnectedHome;