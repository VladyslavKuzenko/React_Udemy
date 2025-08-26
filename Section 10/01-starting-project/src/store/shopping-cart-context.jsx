//Version with useReducer()
import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

function shoppingCartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload
      );
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state, //not needed here
      items: updatedItems,
    };
  }
  if(action.type==="UPDATE_ITEM"){
     const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        ...state,//not needed here
        items: updatedItems,
      };
  }
  return state;
}

export default function CartContextProvider({ children }) {
  const [shoppingCartState, shopingCartDispatch] = useReducer(
    shoppingCartReducer,
    { items: [] }
  );
  //    const[state,dispatch]= useReducer();

  function handleAddItemToCart(id) {
    shopingCartDispatch({
      //стандартні назви, притримуйся цих назв
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shopingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };
  return (
    //Якщо версія React>=19
    // <CartContext>
    //Якщо версія React<19
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

////Version withou useReducer()
// import { createContext, useState, useReducer } from "react";
// import { DUMMY_PRODUCTS } from "../dummy-products";

// export const CartContext = createContext({
//   items: [],
//   addItemToCart: () => {},
//   updateItemQuantity: () => {},
// });

// function shoppingCartReducer(state, action) {
//   return state;
// }

// export default function CartContextProvider({ children }) {
//   const [shoppingCartState, shopingCartDispatch] = useReducer(
//     shoppingCartReducer,
//     { items: [] }
//   );
//   //    const[state,dispatch]= useReducer();
//   const [shoppingCart, setShoppingCart] = useState({
//     items: [],
//   });

//   function handleAddItemToCart(id) {
//     setShoppingCart((prevShoppingCart) => {
//       const updatedItems = [...prevShoppingCart.items];

//       const existingCartItemIndex = updatedItems.findIndex(
//         (cartItem) => cartItem.id === id
//       );
//       const existingCartItem = updatedItems[existingCartItemIndex];

//       if (existingCartItem) {
//         const updatedItem = {
//           ...existingCartItem,
//           quantity: existingCartItem.quantity + 1,
//         };
//         updatedItems[existingCartItemIndex] = updatedItem;
//       } else {
//         const product = DUMMY_PRODUCTS.find((product) => product.id === id);
//         updatedItems.push({
//           id: id,
//           name: product.title,
//           price: product.price,
//           quantity: 1,
//         });
//       }

//       return {
//         items: updatedItems,
//       };
//     });
//   }

//   function handleUpdateCartItemQuantity(productId, amount) {
//     setShoppingCart((prevShoppingCart) => {
//       const updatedItems = [...prevShoppingCart.items];
//       const updatedItemIndex = updatedItems.findIndex(
//         (item) => item.id === productId
//       );

//       const updatedItem = {
//         ...updatedItems[updatedItemIndex],
//       };

//       updatedItem.quantity += amount;

//       if (updatedItem.quantity <= 0) {
//         updatedItems.splice(updatedItemIndex, 1);
//       } else {
//         updatedItems[updatedItemIndex] = updatedItem;
//       }

//       return {
//         items: updatedItems,
//       };
//     });
//   }

//   const ctxValue = {
//     items: shoppingCart.items,
//     addItemToCart: handleAddItemToCart,
//     updateItemQuantity: handleUpdateCartItemQuantity,
//   };
//   return (
//     //Якщо версія React>=19
//     // <CartContext>
//     //Якщо версія React<19
//     <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
//   );
// }
