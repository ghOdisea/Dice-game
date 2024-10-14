// StateProvider.js
import { createContext, useReducer, useContext } from 'react';

const initialState = {
  isAuthenticated: false,
  user: "Default",
  id: "2",
  dice1: "1",
  dice2: "2"
};

const StateContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.name,
        id: action.payload.id,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        id: null,
      };
    case 'GETDICEVAL':
        return{
          ...state,
          dice1: action.payload.dice1,
          dice2: action.payload.dice2
        }
    default:
      return state;
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);