import { Navigate, Route, Routes } from "react-router-dom"
import { CartView } from "./componentes/CartView"
import { CatalogView } from "./componentes/CatalogView"
import { useItemsCart } from "./hooks/useItemsCart"
import { NavBar } from "./componentes/NavBar"


export const CartApp = () => {

  const {
    cartItem,
    handlerAddProductCart,
    handlerDeleteProductCart
  } = useItemsCart()

  return (
    <>
    <NavBar/>
      <div className="container my-4">
        <h3>Cart App</h3>
        <Routes>
          <Route path="catalog" element={<CatalogView handler={handlerAddProductCart} />} />

          <Route path="cart" element={(
            cartItem?.length <= 0?
            <div className="alert alert-warning">No hay productos en el carro de compras</div>: (
              <div className="my-4 w-50">
                <CartView
                  items={cartItem}
                  handlerDelete={handlerDeleteProductCart}
                />
              </div>))} />

              <Route path="/"element={<Navigate to="/catalog"/>}/>
        </Routes>


      </div>



    
    </>
  )
}


