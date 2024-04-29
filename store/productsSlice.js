import { createSlice } from "@reduxjs/toolkit";
import products from "../src/data/products";

const initialState = {
    
     products :products,
     selectedProducts:null
}

export const productsSlice = createSlice({
    
    name: 'products',
    initialState,
    reducers:{

        selectedProducts:(state,action) => {
            const productId = action.payload
            state.selectedProducts = state.products.find((IdProduct) => IdProduct.id == productId)
           
        }

    }

    

})

