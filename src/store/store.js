import { authReducer } from 'reducers/authReducer';
import { issuesReducer } from 'reducers/issuesReducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  auth: authReducer,
  issues: issuesReducer
});

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  ) 
);




