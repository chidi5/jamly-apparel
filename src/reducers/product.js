import {
    SELL_LIST_REQUEST,
    SELL_LIST_SUCCESS,
    SELL_LIST_FAIL,

    DEVICE_DETAILS_REQUEST,
    DEVICE_DETAILS_SUCCESS,
    DEVICE_DETAILS_FAIL,
    DEVICE_DETAILS_RESET,

    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_RESET,

} from '../actions/types'

export const sellListReducer = (state = { devices: [] }, action) => {
    switch (action.type) {
        case SELL_LIST_REQUEST:
            return { loading: true, devices: [] }

        case SELL_LIST_SUCCESS:
            return {
                loading: false,
                devices: action.payload.devices,
                page: action.payload.page,
                pages: action.payload.pages
            }

        case SELL_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const deviceDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case DEVICE_DETAILS_REQUEST:
            return { ...state, loading: true }

        case DEVICE_DETAILS_SUCCESS:
            return { loading: false, device: action.payload }

        case DEVICE_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        case DEVICE_DETAILS_RESET:
            return { device: {} }


        default:
            return state
    }
}

export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { loading: true }

        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }

        case PRODUCT_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case PRODUCT_CREATE_RESET:
            return {}

        default:
            return state
    }
}