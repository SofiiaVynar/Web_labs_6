import { createStore, combineReducers } from 'redux';
import cartSlicer from './cartSlice';

const rootReducer = combineReducers({
    cart: cartSlicer,
});

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {};

const store = createStore(
    rootReducer,
    persistedState
);

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;



