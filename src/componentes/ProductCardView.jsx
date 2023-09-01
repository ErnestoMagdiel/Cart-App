import React from 'react'
import { useNavigate } from 'react-router-dom'

export const  ProductCardView= ({id,name,description,price,handler}) => {

const navigate=useNavigate()

const onAddProduct=(product)=>{
handler(product)
navigate("/cart")
  }
  return (
    <>
    <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">$ {price}</p>
                <button 
                className="btn  btn-primary"
                onClick={()=>onAddProduct({name,description,price,id})}
                >Agregar</button>
              </div>
            </div>
          </div>
    </>
  )
}
