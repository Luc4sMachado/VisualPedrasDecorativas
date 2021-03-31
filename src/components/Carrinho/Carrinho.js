import React, { useContext } from "react";
import { CarrinhoContext } from "../../Global/CarrinhoContext"

const Carrinho = () => {

    return (

        <div className="container">
            <div className="cartcontainer">
                <span className="cart-produto-name" > itens no carrinho: 0 </span>
                <p></p>
                <span className="cart-produto-price" > preço total : 0 </span>
            </div>
        </div>


    )
}

export default Carrinho;