import deepcopy from 'deepcopy';

var initialState = {
    
    the_usual:[
        {name: "eggs", isChecked: false},
        {name: "milk", isChecked: false}
    ], shopping_list:[
        {name: "ham", isChecked: false},
        {name: "milk", isChecked: false}
    ],
};

export function shoppingListReducer (state, action) {
    if (state === undefined) {
        return initialState;
    }
    console.log(action);

    let new_state = deepcopy(state);
   
    if (action.type === 'TOGGLE_CHECKED_SHOP') {
        new_state.shopping_list[action.data.index].isChecked = !state.shopping_list[action.data.index].isChecked;
    } else if(action.type === 'ADD_ITEM_SHOP') {
        new_state.shopping_list.push({name: action.data.name, isChecked: false});
        
    } else if((action.type === 'DELETE_ITEM_SHOP') ){
        new_state.shopping_list = new_state.shopping_list.filter(item => !item.isChecked);

    }else if (action.type === 'TOGGLE_CHECKED_USUAL') {
        new_state.the_usual[action.data.index].isChecked = !state.the_usual[action.data.index].isChecked;
    } else if(action.type === 'ADD_ITEM_USUAL') {
        new_state.the_usual.push({name: action.data.name, isChecked: false});
    } else if((action.type === 'DELETE_ITEM_USUAL') ){
        new_state.the_usual = new_state.the_usual.filter(item => !item.isChecked);
    } else if(action.type === 'MOVE_USUAL_TO_SHOP') {
       new_state.shopping_list.push(...action.data); 
    }
    return new_state;
}

export default shoppingListReducer;