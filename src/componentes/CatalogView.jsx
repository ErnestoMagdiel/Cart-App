import React, { useEffect, useState } from 'react'
import { getProduct } from '../services/productService'
import { ProductCardView } from './ProductCardView'

export const CatalogView = ({handler}) => {
  const[products,setProducts]=useState([])

  useEffect(()=>{
    setProducts(getProduct())
  },[])

  return (
    <>
      <div className="row">
        {products.map(prod => (
         <ProductCardView 
         handler={handler}
         key={prod.id}
         id={prod.id}
         name={prod.name}
         price={prod.price}
         description={prod.description}/> 
        ))}
        </div>
      </>
      )
}
