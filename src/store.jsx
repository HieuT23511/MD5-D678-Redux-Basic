import {applyMiddleware, createStore} from "redux";
import axios from "axios";
import thunk from "redux-thunk";

const reducer = (initialState, action) => {
    if(action.type === "a"){
        return action.payload
    }
    return {
        name: " Hello World"
    }
}
export const getData = () => {
    return async dispatch => {
        const res = await axios.get('http://localhost:3001/students');
        dispatch({
            type: "a",
            payload: res.data
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
export default store