import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0,
    products: []
}

const addItemAction = (state, action) => {
    const product = state.products.find((p) => p.id === action.payload.id);
    if (product) {
        product.quantity += 1;
        return;
    } else {
        state.products.push({ ...action.payload, quantity: 1 });
    }
    state.count = state.products.length;
}

const checkoutAction = (state) => {
    let totalPrice = 0;
    state.products.forEach((product) => {
        totalPrice += product.price * product.quantity;
    });
    alert(`Total Price: $${Math.round(totalPrice)}`);
    state.count = 0;
    state.products = [];
}

const addToCart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: addItemAction,
        checkout: checkoutAction
    }
})

export const {
    addItem,
    checkout
} = addToCart.actions;
export default addToCart.reducer;