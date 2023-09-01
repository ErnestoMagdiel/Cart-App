import React from 'react'
import { productos } from '../data/products'

export const getProduct = () => productos

  
  export const calculateTotal=(items)=>{
 return items.reduce((accumulator,i)=>accumulator + i.product.price*i.quantity,0)
  }

