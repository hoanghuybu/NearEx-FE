import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [newCart, setNewCart] = useState(false);

    return <CartContext.Provider value={{ newCart, setNewCart }}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
