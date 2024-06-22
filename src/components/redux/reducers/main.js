import {getProductsreducer} from "./Productsreducers" ;
import {combineReducers} from "redux";


const rootreducers = combineReducers({
    getproductsdata:getProductsreducer
});


export default rootreducers;