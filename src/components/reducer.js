const reducer = (state, action) => {
  // const checkNumber = (num) => {
  //   if (num > 1) return num - 1;
  //   else {
  //     // customAlert(true, "use the remove button to remove item");
  //     return num;
  //   }
  // };
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };

    case "DECREASE":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, amount: item.amount - 1 }
              : item
          )
          .filter((item) => item.amount !== 0), //chainnng to remove when it's less than 1 or use checknumber concept
      };

    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "GET_TOTAL":
      return {
        ...state,
        total: state.cart.reduce(
          (acc, item) => acc + item.price * item.amount,
          0
        ),
      };

    case "GET_ITEM":
      return {
        ...state,
        cartItems: state.cart.reduce((acc, item) => acc + item.amount, 0),
      };

    case "DELETE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case "ALERT":
      let { type, msg } = state.alert;
      type = true;
      msg = "test";
      return {
        ...state,
        alert: { type, msg },
      };

    case "LOADING":
      return { ...state, loading: true };

    case "DISPLAY_ITEMS":
      return { ...state, cart: action.payload, loading: false };
    default:
      throw new Error("NO MATCHING ACTION TYPE");
  }
};
export default reducer;
