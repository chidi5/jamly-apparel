import axios from 'axios'
import {
    STORE_REQUEST,
    STORE_SUCCESS,
    STORE_FAIL,

} from './types'


export const loadStore = (domain) => async (dispatch) => {
    try {
        dispatch({ type: STORE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(
            'https://getjamly.herokuapp.com/api/loadstorefront',
            { "store_domain": domain },
            config
        )

        dispatch({
            type: STORE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: STORE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}