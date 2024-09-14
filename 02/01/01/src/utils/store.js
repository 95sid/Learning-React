

import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";

const store =  configureStore({
    reducer:{
        cart: cartSlice,
    },
});

export default store;
/**
 * Create Store 
 *  - configureStore(api) - @redux/toolkit
 * 
 * Provide Provider to our application 
 *  - <Provider store = {store}> - import from react-redux 
 * 
 * create Slice 
 *  - cartSlice: createSlice(api){
 *      name:
 *      initialState:
 *      reducers:{
 *          addItem: (state,actions)=>
 *      }
 * }
 * 
 * expert const {addItem,... } = cartSlice.actions;
 * export default cartSlice.reducer
 * 
 * 
 * put that slice into store 
 * 
 * store = configureStore({
 *  reducer: {
 *      cart: cartSlice,
 *      user: userSlice
 * }
 * })
 */