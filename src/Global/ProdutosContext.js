import React, {createContext, useState} from "react";
import iphone from "../assests/produto.jpg";

export const ProdutosContext = createContext();

const ProdutosContextProvider = (props) =>{
    const [produtos] = useState([
        {id:1, name: 'Exemplo', price: 1000, image: iphone, status: 'hot'},
        {id:2, name: 'Exemplo', price: 1000, image: iphone, status: 'new'},
        {id:3, name: 'Exemplo', price: 1000, image: iphone, status: 'hot'},
        {id:4, name: 'Exemplo', price: 1000, image: iphone, status: 'new'},
        {id:5, name: 'Exemplo', price: 1000, image: iphone, status: 'hot'},
        {id:6, name: 'Exemplo', price: 1000, image: iphone, status: 'new'},
        {id:7, name: 'Exemplo', price: 1000, image: iphone, status: 'hot'},
        {id:8, name: 'Exemplo', price: 1000, image: iphone, status: 'new'},

    ])
    return(
        <ProdutosContext.Provider value={{produtos:[...produtos]}}>
            {props.children}
        </ProdutosContext.Provider>
    )
}

export default ProdutosContextProvider;