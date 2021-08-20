import deepcopy from 'deepcopy';

var initialState = {
    shopping_list:[
        {name: "eggs", isChecked: false},
        {name: "milk", isChecked: false}
    ]
};

export function shoppingListReducer (state, action) {
    if (state === undefined) {
        return initialState;
    }
    console.log(action);

    let new_state = deepcopy(state);
   
    if (action.type === 'TOGGLE_CHECKED') {
        new_state.shopping_list[action.data.index].isChecked = !state.shopping_list[action.data.index].isChecked;
    } else if(action.type === 'ADD_ITEM') {
        new_state.shopping_list.push({name: action.data.name, isChecked: false});
    } else if((action.type === 'DELETE_ITEM') ){
        new_state.shopping_list = new_state.shopping_list.filter(item => !item.isChecked);
    }

    return new_state;
}

export default shoppingListReducer;