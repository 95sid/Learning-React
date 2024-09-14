import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: [],
    },
    reducers: {
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state,action)=>{
            state.items.pop();
        },
        clearItem:(state)=>{
            state.items = [];
        }
    }
});

export const {addItem,removeItem,clearItem} = cartSlice.actions;

// combine all reducers and make single reducer 
export default cartSlice.reducer;

/** 
 * cartSlice:{
 *  actions:{addItem,clearItem,removeItem},
 *  reducer:{function of actions }
 * }
 * 
 *
*/
