import React from "react"
import ProdutosContextProviders from "../../Global/ProdutosContext";
import Produtos from "../Produtos/Produtos";

const Cardproduto =() => {
    return(
        <div className="CardProduto">
        <ProdutosContextProviders>
        <div className="container">
        <Produtos/>        
        </div>
      </ProdutosContextProviders>
      </div>
    )
}

export default Cardproduto
