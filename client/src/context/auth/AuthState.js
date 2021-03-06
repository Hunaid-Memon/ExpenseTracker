import React, { useReducer } from 'react';
import axios from 'axios';
import authContext from './authContext';
import authReducer from './authReducer';

import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
 } from '../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    }
    const [state, dispatch] = useReducer(authReducer, initialState)
    
    // Load User

    // Register User
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/users', formData, config);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data })
        } catch(err) {
            dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg })
        }
    }

    // Login User

    // Logout User

    // Clear Errors

    return (
        <authContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                register
                }}
        >
            {props.children}
        </authContext.Provider>
    )  
}

export default AuthState;
