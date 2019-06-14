import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { SET_AUTHENTIFICATION } from './actions-types';

const BACK_END_POINT = "http://localhost:3000";

export function setAuthentification(isLoggedIn){
    return {
            type:SET_AUTHENTIFICATION,
            payload:isLoggedIn
    };
}

// Authentification User

export function LoginUser({email,password}){
    return function(dispatch){
        axios.post(`${BACK_END_POINT}/user/login`,{
            email,
            password
        }).then((response)=>{
            console.log('--->Login user',response);
            AsyncStorage.setItem("token",response.data.token);
            dispatch(setAuthentification(true));
        }).catch((error)=>{
            console.log(error)
        })
    }
}

export function signupUser({email,password}){
    return function(dispatch){
        axios.post(`${BACK_END_POINT}/user/signup`,{
            email,
            password
        }).then((response)=>{
            console.log("---> response signup",response);
            localStorage.setItem("token",response.data.token);
            dispatch(setAuthentification(true));
        }).catch((error)=>{
            console.log(error)
        })
    }
}