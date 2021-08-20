export function toggleChecked (data) {
    return {
        type: 'TOGGLE_CHECKED',
        data: data
    }
}

export function addItem (data) {
    return {
        type: 'ADD_ITEM',
        data: data
    }
}

export function deleteItem (data) {
    return {
        type: 'DELETE_ITEM',
        data: data
    }
}