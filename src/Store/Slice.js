import { createSlice } from "@reduxjs/toolkit";


const Slice = createSlice({
    name: 'Cart',
    initialState : {
        cartItems: []
    },
    reducers :{
        addtocart :(state, action)=>{
            const existingItem = state.cartItems.find(item => item.id === action.payload.id)
            if(existingItem){
                existingItem.quantity += 1;
            }
            else{
                state.cartItems.push({...action.payload, quantity : 1})
            }
        },
        removecart:(state, action)=>{
            const existingItem= state.cartItems.find(item => item.id === action.payload.id)
            if(existingItem.quantity > 1){
                existingItem.quantity -= 1
            }
            else if(existingItem.quantity === 0)
            {
                state.cartItems.remove(item => item.id !== action.payload.id)
            }
            else{
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
            }
        }
    }
})
export const {addtocart, removecart} = Slice.actions
export default Slice.reducer

