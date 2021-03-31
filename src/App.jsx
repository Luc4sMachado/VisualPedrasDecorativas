import React from 'react';
import './App.css';

import Banner from "./components/Banner/Banner";

import {Route,BrowserRouter, Switch} from "react-router-dom";
import ProdutosContextProviders from "../src/Global/ProdutosContext";
import Produtos from "../src/components/Produtos/Produtos";
import CarrinhoContextProviders from "./Global/CarrinhoContext";
import Carrinho from "../src/components/Carrinho/Carrinho";
function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
      <ProdutosContextProviders>
        <CarrinhoContextProviders>
        
        <Banner/>
          <Switch>
            <Route path="/" exact component={Produtos} />
            <Route path="/carrinho" exact component = {Carrinho}/>
          </Switch>
          </CarrinhoContextProviders>
      </ProdutosContextProviders>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
