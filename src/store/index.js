import { createStore, combineReducers, applyMiddleware } from "redux";

import CategoryReducer from "./reducers/category.reducer";
import ProductsReducer from "./reducers/products.reducer";



const RootReducer = combineReducers({
    categories: CategoryReducer,
    product: ProductsReducer,
  
  
  });
  
  export default createStore(RootReducer);