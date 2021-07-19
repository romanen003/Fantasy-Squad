import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './auth/reducer';
import { myteamReducer } from './myteam/reducer';
import { myGameReducer } from './mygame/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    auth: authReducer,
    myteam: myteamReducer,
    mygame: myGameReducer,
  }),
  composeEnhancers(applyMiddleware(thunk)),
);
