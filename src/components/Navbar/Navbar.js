import React from "react";
import {FaShoppingCart} from "react-icons/fa";
import {Link} from "react-router-dom";
import {Nav} from '../Navbar/Navbar.style'
const Navbar = () => {
    return (
        <Nav>
            <ul className="left">
                <li><Link to="/">Visual Pedras Decorativas</Link></li>
            </ul>
            <ul className="right">
                <li><Link to="/carrinho">
                    <span className="shoppingCart"><i><FaShoppingCart size="27px"/></i></span><span className="cartCount">0</span>
                </Link></li>
            </ul>
        </Nav>
    )
}

export default Navbar