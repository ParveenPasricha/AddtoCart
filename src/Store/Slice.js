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
        }
    }
})
export const {addtocart} = Slice.actions
export default Slice.reducer

