import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState ={
    token:null,
    loading:false,
    error:null
}

const authStart =(state,action)=>{
    return updateObject(state,{
        error:null,
        loading:true
    });
}

const authSucess =(state,action)=>{
    return updateObject(state,{
        error:null,
        loading:false,
        token:action.token
    });
}

const authFail =(state,action)=>{
    return updateObject(state,{
        error:action.error,
        loading:false
    });
}

const authLogout =(state,action)=>{
    return updateObject(state,{
        token:null
    });
}

const reducer = (state=initialState,action)=>{
    switch (action.type){
        case actionTypes.AUTH_START:return authStart(state,action);
        case actionTypes.AUTH_SUCESS:return authSucess(state,action);
        case actionTypes.AUTH_FAIL:return authFail(state,action);
        case actionTypes.AUTH_LOGOUT:return authLogout(state,action);
        default:
            return state;
    }
}

export default reducer;
