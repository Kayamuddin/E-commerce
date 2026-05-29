import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ASYNC FUNCTION
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",

    async () => {
        const response = await fetch(
            "https://dummyjson.com/products"
        );

        const data = await response.json();

        return data.products;
    }
);

const checkoutAction = (state) => {
    let totalPrice = 0;
    state.products.forEach((product) => {
        totalPrice += product.price * product.quantity;
    });
    alert(`Total Price: $${totalPrice}`);
    state.count = 0;
    state.products = [];
}


const productSlice = createSlice({
    name: "products",

    initialState: {
        items: [],
        loading: false,
        error: null
    },

    reducers: {
        checkout: checkoutAction
    },

    extraReducers: (builder) => {
        builder
            // PENDING
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            // SUCCESS
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            // ERROR
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default productSlice.reducer;