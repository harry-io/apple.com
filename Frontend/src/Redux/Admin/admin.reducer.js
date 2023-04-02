import * as types from './admin.types';

const initialState = {
    loading: false,
    error: false,
    adminProducts: [],
    orders: []
}

const AdminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.LOADING:
            return { ...state, loading: true }
        case types.ERROR:
            return { ...state, loading: false, error: true }
        case types.GETORDERSDATA:
            return { ...state, orders: payload, loading: false }
        case types.DELETEORDERSDATA: {
            let data = state.orders.filter((item) => {
                return item.id !== payload.id
            })
            return { ...state, products: data }
        }
        case types.GETADMINPRODUCTS:
            return { ...state, adminProducts: payload, loading: false }
        case types.ADDADMINPRODUCT:
            return { ...state, adminProducts: [payload, ...state.adminProducts] }
        case types.DELETEADMINPRODUCTS: {
            let data = state.adminProducts.filter((item) => {
                return item.id !== payload.id
            })
            return { ...state, adminProducts: data }
        }
        case types.EDITADMINPRODUCTS: {
            return {
                ...state, adminProducts: state.adminProducts.map((item) =>
                    item.id === payload.id ? payload : item)
            }
        }
        default:
            return state;
    }
}

export default AdminReducer;