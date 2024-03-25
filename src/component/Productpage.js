import React, { useState } from "react";
import Cart from "./Cart";
import Footer from "./Footer";
import Header from "./Header";
import ProductList from "./ProductList";

function Productpage() {
    const [cartData, setCartData] = useState([]);

    const addToCart = (product) => {
        const existingItemIndex = cartData.findIndex(item => item.id === product.id);
        if (existingItemIndex !== -1) {
            const updatedCartData = [...cartData];
            updatedCartData[existingItemIndex].quantity += 1;
            setCartData(updatedCartData);
        } else {
            setCartData(prevCartData => [...prevCartData, { ...product, quantity: 1 }])
        }
    }

    const removeFromCart = (itemId) => {
        const updatedCart = cartData.map(item => {
            if (item.id === itemId) {
                // If item quantity is more than 1, decrease quantity by 1
                if (item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    // If item quantity is 1, remove the item from the cart
                    return null;
                }
            }
            return item;
        }).filter(Boolean); // Remove any null values from the cart
        setCartData(updatedCart);
    };
    

    return (
        <div className="product-page">
            <Header />
            <table>
                <tr>
                    <td><ProductList addToCart={addToCart} /></td>
                    <td style={{ verticalAlign: "top" }}><Cart cart={cartData} removeFromCart={removeFromCart} /></td>
                </tr>
            </table>
            <Footer />
        </div>
    );
}

export default Productpage;
