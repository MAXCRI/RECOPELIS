import {createStore, combineReducers} from "redux";
import CategoryReducers from "./reducers/category.reducers";
import ProductReducer from "./reducers/products.reducers";

const RootReducers = combineReducers({
    categories: CategoryReducers,
    products: ProductReducer,
    
});

export default createStore (RootReducers);