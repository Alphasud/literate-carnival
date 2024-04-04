import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [] as any[],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;

        if (item.quantity === 0) cartSlice.caseReducers.removeFromCart(state, action);
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: any): any[] => state.cart.cart;

export const getTotalCartQuantity = (state: any): number => {
  return state.cart.cart.reduce((sum: any, item: any) => sum + item.quantity, 0);
};

export const getTotalCartPrice = (state: any): number => {
  return state.cart.cart.reduce((sum: any, item: any) => sum + item.totalPrice, 0);
};

export const getCurrentQuantityById =
  (pizzaId: any) =>
  (state: any): number => {
    const item = state.cart.cart.find((item: any) => item.pizzaId === pizzaId);
    return item ? item.quantity : 0;
  };

// see Reselect library performance optimization
