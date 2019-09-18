// import './utils.js'


import React from 'react';
import ReactDOM from 'react-dom';
//react-redux lib named import
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
//addExpense is named filter
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

//for development and testing
// console.log(store.getState());
// store.dispatch(addExpense({description: 'Water Bill', amount: 4500}));
// store.dispatch(addExpense({description: 'Gas Bill', createdAt: 1000}));
// store.dispatch(addExpense({description: 'Rent Bill', amount: 109500}));


// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses)

//api have to pass a single prop to the Provider  - store defined as variable above
const jsx = (
    <Provider store= {store}>
        <AppRouter/>
    </Provider> 
);
  
ReactDOM.render(jsx, document.getElementById('app'));
  





