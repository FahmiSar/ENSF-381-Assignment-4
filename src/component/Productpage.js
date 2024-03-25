import React, {useState} from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Footer from "./Footer";


function Productpage(){
    const [cartData, setCartData] = useState([]);
       
    const addToCart = (product) => {
        setCartData(prevCartData => [...prevCartData, product])
    }

    return(
        <div className = "product-page">
            <Header/>
            <table>
                <tr>
                    <td><ProductList addToCart = {addToCart}/></td>
                    <td style={{verticalAlign: "top"}}><Cart cart = {cartData}/></td>
                </tr>
            </table>
            <Footer/>
        </div>
    );
}

export default Productpage;