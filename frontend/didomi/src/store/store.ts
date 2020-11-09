import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer, Reducer } from './reducers';



export function initStore(reducer: Reducer) {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
  )
}

const store = () => initStore(rootReducer);

export default store;
