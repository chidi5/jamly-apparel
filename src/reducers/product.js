import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

    CATEGORY_PRODUCTS_REQUEST,
    CATEGORY_PRODUCTS_SUCCESS,
    CATEGORY_PRODUCTS_FAIL,

} from '../actions/types'

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }

        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                //page: action.payload.page,
                //pages: action.payload.pages
            }

        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const productDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state }

        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }

        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const categoryProductListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case CATEGORY_PRODUCTS_REQUEST:
            return { loading: true, products: [] }

        case CATEGORY_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                //page: action.payload.page,
                //pages: action.payload.pages
            }

        case CATEGORY_PRODUCTS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}