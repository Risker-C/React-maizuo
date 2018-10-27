import {createStore,applyMiddleware} from "redux"
import reducer from '../reducers/reducer';
import thunkMiddleware from 'redux-thunk';

//定义初始状态
const state = {
    loading:false,
    films:[]
}

//创建store/
const store = Radux.createStore(reducer,state)