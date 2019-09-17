import React from 'react';
import  { Link } from 'react-router-dom'; //import to get the current ID


const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{ description }</h3>
        </Link>
        <p> {amount} - { createdAt} </p>

    </div>
);

//the ExpenseListItem in connect gives us dispatch prop
export default ExpenseListItem;

