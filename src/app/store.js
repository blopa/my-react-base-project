import {createStore} from 'redux';

const initialState = {
  logged: false,
  token: '',
  user: {
    id: 1,
    nickname: 'nick1'
  }
};

const reducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'LOGIN':
      newState.logged = action.payload.logged;
      newState.token = action.payload.token;
      break;
    case 'LOGOUT':
      newState.logged = action.payload.logged;
      newState.token = action.payload.token;
      break;
    default:
      break;
  }

  return newState;
};

const store = createStore(reducer);
store.subscribe(() => {});

export default store;
