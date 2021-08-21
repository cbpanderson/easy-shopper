export function toggleCheckedShop (data) {
    return {
        type: 'TOGGLE_CHECKED_SHOP',
        data: data
    }
}

export function addItemShop (data) {
    return {
        type: 'ADD_ITEM_SHOP',
        data: data
    }
}

export function deleteItemShop (data) {
    return {
        type: 'DELETE_ITEM_SHOP',
        data: data
    }
}

export function toggleCheckedUsual (data) {
    return {
        type: 'TOGGLE_CHECKED_USUAL',
        data: data
    }
}

export function addItemUsual (data) {
    return {
        type: 'ADD_ITEM_USUAL',
        data: data
    }
}

export function deleteItemUsual (data) {
    return {
        type: 'DELETE_ITEM_USUAL',
        data: data
    }
}