import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : 0,
    products: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
}

const addItemReducer = (state, action) => {
    const product = state.products.find((p) => p.id === action.payload.id);
    if (product) {
        product.quantity += 1;
    } else {
        state.products.push({ ...action.payload, quantity: 1 });
        state.count = state.products.length;
    }
    localStorage.setItem("cart", JSON.stringify(state.products));
}

const checkoutReducer = (state) => {
    let totalPrice = 0;
    state.products.forEach((product) => {
        totalPrice += product.price * product.quantity;
    });
    alert(`Total Price: $${Math.round(totalPrice)}`);
    state.count = 0;
    state.products = [];
    localStorage.removeItem("cart");
}

const increaseQuantityReducer = (state, action) => {
    const product = state.products.find((p) => p.id === action.payload);
    if (product) {
        product.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.products));
    }
}

const decreaseQuantityReducer = (state, action) => {
    const product = state.products.find((p) => p.id === action.payload);
    if (product) {
        product.quantity -= 1;
        if (product.quantity < 1) {
            state.products = state.products.filter((p) => p.id !== action.payload);
        }
        localStorage.setItem("cart", JSON.stringify(state.products));
    }
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: addItemReducer,
        checkout: checkoutReducer,
        removeFromCart: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
            state.count = state.products.length;
            localStorage.setItem("cart", JSON.stringify(state.products));
        },
        increaseQuantity: increaseQuantityReducer,
        decreaseQuantity: decreaseQuantityReducer
    }
})

export const {
    addItem,
    checkout,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
} = cartSlice.actions;
export default cartSlice.reducer;