import React ,{createContext, useReducer} from "react"

import {CarrinhoReducer} from "./CarrinhoReducer";
export const CarrinhoContext = createContext();

const CarrinhoContextProvider = (props) => {
    const [cart, dispatch] = useReducer(CarrinhoReducer, {shoppingCart: [], totalPrice: 0, qty: 0},console.log('terminou essa parte'));

    return(
        console.log(cart),

        <CarrinhoContext.Provider value={{...cart,dispatch}} >
            
            {props.children}
        </CarrinhoContext.Provider>
        
    )
}

export default CarrinhoContextProvider;