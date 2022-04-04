import { devToolsEnhancer } from "redux-devtools-extension";
import { createStore } from "redux";

const initialState = {
    logged : false,
}

const reductor = (state = initialState, action) => {
    console.log('llega A REDUCTOR')
if (action.type == "USER_LOGGED"){
    return {
        ...state,
        logged: true,
    }
}
return state
}

export default createStore(reductor, devToolsEnhancer())