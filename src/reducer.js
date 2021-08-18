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
    if (action.type === 'TOGGLE_CHECKED') {
        let new_state = deepcopy(state);
        new_state.shopping_list[action.data.index].isChecked = !state.shopping_list[action.data.index].isChecked;
        return new_state;
    }

    return state;
}

export default shoppingListReducer;