import { createStore, combineReducers, applyMiddleware } from "redux";

import CategoryReducer from "./reducers/category.reducer";
import ProductsReducer from "./reducers/products.reducer";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cart.reducer";
import orderReducer from "./reducers/order.reducer";



const RootReducer = combineReducers({
    categories: CategoryReducer,
    product: ProductsReducer,
    cart: cartReducer,
    orders: orderReducer,
  });
  
  export default createStore(RootReducer, applyMiddleware(thunk));