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
                <div style={{
                    marginLeft:'30%', 
                    marginBottom: '1%', 
                    fontSize:'16pt', 
                    marginTop: '2%', 
                    color:'#00838f'}}>
                    Dump your usuals in your shopping list and keep shopping!</div>
                <TheUsual></TheUsual>
                <Button style={{marginLeft: '42%', marginTop: '1%', backgroundColor:'#00838f'}} 
                        component={Link} to="/shop" 
                        onClick={(e) => this.handleMoveToShop(e)}>Send to Shopping List</Button>
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