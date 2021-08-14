var initialState = {
    shopping_list:[
        {name: "eggs", checked: false},
        {name: "milk", checked: false}
    ]
};

export function shoppingListReducer (state, action) {
    if (state === undefined) {
        return initialState;
    }

    return state;
}

export default shoppingListReducer;