import React from 'react';
//connect your componenet to the the reduxt store via connect
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem' ;
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense list</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key = {expense.id} {...expense}/>
        })}
        
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

//HOC now
export default connect(mapStateToProps)(ExpenseList);

