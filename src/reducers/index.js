import { combineReducers } from 'redux';
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
} from './user'
import { storeFrontReducer } from './storefront'
import { 
    productListReducer,
    productDetailsReducer,
    categoryProductListReducer
} from './product'
import { cartReducer } from './cart'

export default combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    storeFront: storeFrontReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer,
    categoryProduct: categoryProductListReducer,

    cart: cartReducer,
})