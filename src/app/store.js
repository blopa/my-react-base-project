import {createStore} from 'redux';

const initialState = {
  data: {}
};

const reducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'ACTION_1':
      break;
    case 'ACTION_2':
      break;
    default:
      break;
  }

  return newState;
};

const store = createStore(reducer);
store.subscribe(() => {});

export default store;
