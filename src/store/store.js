import { devToolsEnhancer } from "redux-devtools-extension";
import { createStore } from "redux";

const initialState = {
  logged: false,
  popup: false,
};

const reductor = (state = initialState, action) => {
  console.log("llega A REDUCTOR");
  if (action.type == "USER_LOGGED") {
    return {
      ...state,
      logged: true,
    };
  }
  if (action.type == "VER_POPUP") {
    return {
      ...state,
      popup: { visibilidad: true, texto: action.payload },
    };
  }

<<<<<<< HEAD
export default createStore(reductor, devToolsEnhancer())

=======
  if (action.type == "CERRAR_POPUP") {
    return {
      ...state,
      popup: { visibilidad: false },
    };
  }

  return state;
};

export default createStore(reductor, devToolsEnhancer());
>>>>>>> 85434594b7cc03c8f119d425deb6b53a437d1d40
