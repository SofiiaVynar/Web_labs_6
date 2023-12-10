import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
        Price: 0,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
            
            if (existingItemIndex !== -1) {
                const existingItem = state.items[existingItemIndex];
                existingItem.quantity = newItem.quantity;
                existingItem.price = newItem.price * existingItem.quantity;
            } else {
                const price = newItem.price * newItem.quantity;
                state.Price = price;
                state.totalPrice += price; 
                state.items.push({ ...newItem, price });
            }

            state.totalQuantity += newItem.quantity;
        },
        removeFromCart(state, action) {
            const idToRemove = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === idToRemove);

            if (existingItemIndex === -1) return;

            const existingItem = state.items[existingItemIndex];
            state.totalQuantity -= existingItem.quantity;
            state.totalPrice -= existingItem.price;
            state.Price -= existingItem.price; 

            state.items.splice(existingItemIndex, 1);
        }
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
