import { createContext,useMemo,useReducer } from "react";

export const StoreContext =createContext();

const initialState = {
  cart: {
    cartItems: [],
  },
};

function reducer (state,action){
  switch(action.type) {
    case 'CART_ADD_ITEM':
      return{
        ...state,
        cart:{
          ...state.cart,
          cartItems:[...state.cart.cartItems, action.payload],
        },
      };
      default :
       return state;
  };

}

export function StoreProvider(props){
  const [state,dispatch]= useReducer(reducer,initialState);
  const value = useMemo(()=>({state,dispatch}),[state])
  return <StoreContext.Provider value={value}>  {props.children} </StoreContext.Provider>;
}