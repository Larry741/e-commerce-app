import { createSlice, current } from "@reduxjs/toolkit";

const initialCartState = { items: [], totalCartQty: 0, cartChanged: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCartItems(state, action) {
      state.totalCartQty = action.payload.totalCartQty;
      state.items = action.payload.items ? action.payload.items : [];
      console.log(current(state));
    },
    addProductToCart(state, action) {
      const newItem = action.payload;
      state.cartChanged = true;
      const existingItem = state.items.find((item) => {
        return item.id === newItem.id;
      });

      if (!existingItem) {
        state.items.push(newItem);
        state.totalCartQty++;
      } else {
        existingItem.quantity++;
        existingItem.total += newItem.price;
      }
    },
    removeItemfromCart(state, action) {
      let index;
      const existingItem = state.items.find((item, idx) => {
        index = idx;
        return item.id === action.payload.id;
      });

      if (existingItem.quantity === 1) {
        state.totalCartQty--;
        state.items.splice(index, 1);
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }
      state.cartChanged = true;
    },
  },
});

export const sendCartAction = (cart) => {
  return async (dispatch) => {
    const sendCartData = async () => {
      const response = await fetch(
        "https://extended-bongo-330700-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalCartQty: cart.totalCartQty
          }),
        }
      );
 
      if (!response.ok) {
        throw new Error("Could not send cart data");
      }
    }

    try {
      await sendCartData()
    } catch (error) {
      console.log(error.message);
    }
  }
} 

export const getCartDataAction = () => {
  return async (dispatch) => {
    const fetchCartData = async () => {
      const response = await fetch(
        "https://extended-bongo-330700-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not get cart data");
      }

      const responseData = await response.json();

      return responseData;
    };

    try {
      const data = await fetchCartData();
      dispatch(cartSlice.actions.replaceCartItems(data));
    } catch (error) {
      console.log(error.message);
    }
  }
}

export const cartActions = cartSlice.actions;

export default cartSlice;