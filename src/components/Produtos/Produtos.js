import React,{useContext} from "react"
import {ProdutosContext} from "C:/Users/PICHAU/Desktop/projetos/pedraecommerce/src/Global/ProdutosContext"
import {CarrinhoContext} from "../../Global/CarrinhoContext"

const Produtos = () => {
    const {produtos} = useContext(ProdutosContext);
    const {dispatch} = useContext(CarrinhoContext);
    
    return(
        <div className="produtos">
            {produtos.map((produto) => (
                <div className="produto" key={produto.id}>
                    <div className="produto-image">
                        <img src={produto.image} alt="not found" />
                    </div>
                    <div className="produto-detalhes">
                        <div className="produto-name">
                            {produto.name}
                        </div>
                        <div className="produto-price">
                            R${produto.price}.00
                        </div>
                    </div>
                    <button className="comprar" onClick={() => dispatch({type:
                        'ADD_TO_CART', id: produto.id, produto})}>Comprar</button>
                </div>
            ))}

        </div>
    )
}

export default Produtos