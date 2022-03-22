import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity = state.quantity+1;
            state.products.push(action.payload);
            state.total += action.payload.price *action.payload.quantity;
        },
        deleteProductStarted: (state) => {
            state.isFetching = true;
            state.error = false;
          },
          deleteProductSucceed: (state, action) => {
            state.isFetching = false;
            state.products.splice(
              state.products.findIndex((item) => item._id === action.payload.product._id)
              ,
              1
            );
            state.quantity=((state.quantity)-1)
            state.total=((state.total)-(action.payload.product.price*action.payload.product.quantity))

          },
          deleteProductFailed: (state) => {
            state.isFetching = false;
            state.error = true;
          },
    }
})

export const {addProduct,deleteProductStarted,deleteProductSucceed,deleteProductFailed}= cartSlice.actions
export default cartSlice.reducer;