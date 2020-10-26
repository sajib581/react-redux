const { ADD_TO_CART, REMOVE_FROM_CART } = require("../actions/cartAction")

const initialState = {
    cart: [],
    products: [
        {name : 'Lenevo Laptop', id:1},
        {name : 'Asus', id:2},
        {name : 'Dell Laptop', id:3},
        {name : 'HP Laptop', id:4},
        {name : 'Toshiba Laptop', id:5}  
    ]
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newId = action.id
            const newCart = [...state.cart, newId]
            return {...state, cart: newCart }
        case REMOVE_FROM_CART:  
            const id = action.id;
            console.log(id);
            console.log(state.cart);
            const remainingCart = state.cart.filter(item => item !== id);
            console.log(remainingCart);
            return {...state, cart: remainingCart }
        default:
            return state
    }
}

export default cartReducers