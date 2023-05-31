import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productReducer from './reducers';
import ProductList from './components/ProductList';

const store = configureStore({
    reducer: productReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

function App() {
    return (
        <Provider store={store}>
            <ProductList />
        </Provider>
    );
}

export default App;
