import { createAction, createReducer } from '@reduxjs/toolkit'

const addItem = createAction('ADD_ITEM');
const removeItem = createAction('REMOVE_ITEM');
const initialState = { cart: [] }

const cartReducer = createReducer(initialState, (builder) => {       
  builder
    .addCase(addItem, (state, action) => {       
        const item = state.filter((item) => {
            return item.name === action.item.name;
        })
        if(item)
            item.quantity += action.item.quantity;
        else
            state.cart.push(action.item);
    })
    .addCase(removeItem, (state, action) => {
        state.cart.filter((item) => {
            if(item.name === action.item.name)
                return false;
            else 
                return true;
        });                     
    })
})

export default cartReducer;