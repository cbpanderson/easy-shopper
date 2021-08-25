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

import { deleteItemUsual } from '../actions.js';
import { toggleCheckedUsual } from '../actions.js';

class TheUsual extends (React.Component) {
        
    handleChange(event, index){
        this.props.toggleCheckedUsual({index});
    }
    
    handleDelete(event) {
      this.props.deleteItemUsual({});
    }
    
    
        render() {
        
            return (
                <Card style={{width:'20%', marginLeft: '40%', paddingLeft: '4%'}}>
                  <CardContent>
                  <h2>The Usual</h2>
                    <ul>
                      {this.props.the_usual.map((item, index) => {
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
                    <Button component={Link} to="/addUsual"><AddIcon /></Button>
                    <Button component={Link} to="/usual"><DeleteIcon onClick={(e) => this.handleDelete(e)}/></Button>
                  </CardActions>
                </Card>
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
            toggleCheckedUsual: function (data) {
                dispatch(toggleCheckedUsual(data))
            },
            deleteItemUsual: function (data) {
              dispatch(deleteItemUsual(data))
          }
        }
    }
    
    var ConnectedTheUsual = connect(mapStateToProps, mapDispatchToProps)(TheUsual);
    export default ConnectedTheUsual;