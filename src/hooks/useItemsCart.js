import React, { useEffect, useReducer } from 'react'
import { itemsReducer } from '../reducer/itemsReducer';
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";


const initialCartItems = JSON.parse(sessionStorage.getItem("cart"))||[];

export const useItemsCart = () => {

  const [cartItem,dispatch]=useReducer(itemsReducer,initialCartItems)

  useEffect(()=>{
    sessionStorage.setItem("cart", JSON.stringify(cartItem))
  },[cartItem])

  const handlerAddProductCart = (product) => {
    const hasItem = cartItem.find((i) => i.product.id === product.id)
    if (hasItem) {
      
      dispatch({
        type:UpdateQuantityProductCart,
        payload:product,
      })

    } else {

      dispatch({
        type:AddProductCart,
        payload:product

      })
    }
  }

  const handlerDeleteProductCart = (id) => {
   dispatch({
    type:DeleteProductCart,
    payload:id
   })
  }


  return {
 cartItem,
 handlerAddProductCart,
 handlerDeleteProductCart
  }
    
  
}
