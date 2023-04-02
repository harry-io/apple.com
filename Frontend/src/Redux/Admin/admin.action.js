import axios from 'axios';
import * as types from './admin.types';
import { getData } from "../../Utils/LocalStorage/ls";

export const getOrdersData = () => (dispatch) => {
    dispatch({ type: types.LOADING });
    axios.get(`https://back-ened-bolt.onrender.com/cartProducts/`, {
        headers: {
            Authorization: `bearer ${getData("token_bolt")}`,
        },
    })
        .then((res) => {
            dispatch({ type: types.GETORDERSDATA, payload: res.data })
            // console.log(res.data)
        })
        .catch(() => dispatch({ type: types.ERROR }));
}

export const DeleteOrdersData = (id) => async (dispatch) => {
    dispatch({ type: types.LOADING });
    axios.delete(`https://back-ened-bolt.onrender.com/cartProducts/${id}`, {
        headers: {
            Authorization: `bearer ${getData("token_bolt")}`,
        },
    })
        .then((res) => {
            dispatch({ type: types.DELETEORDERSDATA, payload: res.data })
            // console.log(res.data)
        })
        .catch(() => dispatch({ type: types.ERROR }));
}

export const getAdminProducts = () => (dispatch) => {
    dispatch({ type: types.LOADING });
    axios.get(`https://back-ened-bolt.onrender.com/adminProducts/`, {
        headers: {
            Authorization: `bearer ${getData("token_bolt")}`,
        },
    })
        .then((res) => {
            dispatch({ type: types.GETADMINPRODUCTS, payload: res.data })
            // console.log(res.data)
        })
        .catch((e) => dispatch({ type: types.ERROR }));
}

export const AddAdminProducts = (details) => async (dispatch) => {
    dispatch({ type: types.LOADING });
    console.log(details);
    try {
        const res = await axios.post(`https://back-ened-bolt.onrender.com/adminProducts/add`, details, {
            headers: {
                Authorization: `bearer ${getData("token_bolt")}`,
            },
        });
        dispatch({ type: types.ADDADMINPRODUCT, payload: res.data });
        console.log(res.data);
    } catch (e) {
        return dispatch({ type: types.ERROR });
    }
}

export const DeleteAdminProducts = (id) => async (dispatch) => {
    dispatch({ type: types.LOADING });
    axios.delete(`https://back-ened-bolt.onrender.com/adminProducts/${id}`, {
        headers: {
            Authorization: `bearer ${getData("token_bolt")}`,
        },
    })
        .then((res) => {
            dispatch({ type: types.DELETEADMINPRODUCTS, payload: res.data })
            // console.log(res.data)
        })
        .catch(() => dispatch({ type: types.ERROR }));
}

export const editAdminProducts = (id, changes) => async (dispatch) => {
    console.log(changes);
    dispatch({ type: types.LOADING });
    axios.patch(`https://back-ened-bolt.onrender.com/adminProducts/${id}`, changes, {
        headers: {
            Authorization: `bearer ${getData("token_bolt")}`,
        },
    })
        .then((res) => {
            dispatch({ type: types.EDITADMINPRODUCTS, payload: res.data })
            // console.log(res.data)
        })
        .catch(() => dispatch({ type: types.ERROR }));
}