import React from "react";
import {BrowserRouter,Route, Switch} from "react-router-dom";
import App from '../App'
import Carrinho from "../components/Carrinho/Carrinho";
import Navbar from '../components/Navbar/Navbar'

const Routes = () => (
    <BrowserRouter>
    <Navbar/>
    <Switch>
        <Route exact path= "/" component={App}/>
        <Route exact path= "/carrinho" component={Carrinho}/>
    </Switch>
</BrowserRouter>
);

export default Routes;