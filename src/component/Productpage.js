import React, {useState} from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Footer from "./Footer";


function Productpage(){
    const [cartData, setCartData] = useState([]);
       
    const addToCart = (product) => {
        const existingItemIndex = cartData.findIndex(item => item.id === product.id);
        if(existingItemIndex !== -1){
            const updatedCartData = [...cartData];
            updatedCartData[existingItemIndex].quantity += 1;
            setCartData(updatedCartData);
        } else {
            setCartData(prevCartData => [...prevCartData, {...product, quantity: 1}])
        }
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