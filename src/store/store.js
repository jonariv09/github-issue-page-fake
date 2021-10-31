import { authReducer } from 'reducers/authReducer';
import { issuesReducer } from 'reducers/issuesReducer';
import { uiReducer } from 'reducers/uiReducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  auth: authReducer,
  issues: issuesReducer,
  ui: uiReducer
});

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  ) 
);




