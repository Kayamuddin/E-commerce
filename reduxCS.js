/*
** Problem **: Prop drilling in React can lead to complex and hard-to-maintain
code when passing data through multiple levels of components.

** Solution **: Redux is a state management library that provides a centralized store for managing 
application state, allowing components to access and update state without the need for prop drilling.

Redux is: A state management library.
It stores application-wide data in one place.
Examples:
- logged-in user
- cart items
- theme
- notifications
- API data
- loading state

********* Redux Important Terms:
*** Store
The central storage of your app.
Redux Store = Global Database for Frontend State
*** State
The actual data inside the store
*** Action
An action describes:
"What happened?"  like type: "increment"
*** Reducer
Reducer decides:
"How state changes."
function counterReducer(state, action) { } 
*** Dispatch
Dispatch sends actions to Redux.
dispatch({ type: "increment" });
dispatch(action)
       ↓
reducer runs
       ↓
state updates
       ↓
UI re-renders

************** SetUp Redux in React:
npm create vite@latest . --template react
npm install @reduxjs/toolkit react-redux

************** First Example:
-- store.js
import counterReducer from "./counterSlice.js"
const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

-- counterSlice.js
const initialState = {
    count: 0,
    products: []
}
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }
    }
})
export const { increment, decrement } = counterSlice.actions;       // these are action. to run actions, we need to dispatch them.
export default counterSlice.reducer;

-- App.jsx
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice.js";
const count = useSelector((state) => state.counter.count)  // to access state
const dispatch = useDispatch();
-------------------------------
<div>{count}</div>
<button onClick={() => dispatch(increment())}>
    Increment
</button>
<button onClick={() => dispatch(decrement())}>
    Decrement
</button>

************** Tips
1. Always use the Redux DevTools extension to debug your state changes.
2. for running actions, use dispatch. Do not call action creators directly.
3. To Access state data, use useSelector hook. Do not access state directly from the store.

1. Store
Main Redux container that holds all app state.
store.js
--------
const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

2. Slice
Creates reducers + actions together.
cartSlice.js
------------
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {}
});

3. State
Actual data stored in Redux.
const initialState = {
  count: 0,
  products: []
};

4. Reducers
Functions that update state.
reducers: {
  addItem: (state, action) => {
    state.count += 1;
  }
}

5. Actions
Triggers reducers.
dispatch(addItem(product));

6. useSelector
Reads Redux state in component.
const count = useSelector(
  (state) => state.cart.count
);

7. useDispatch
Sends actions to Redux.
const dispatch = useDispatch();
dispatch(addItem(product));
```

*/