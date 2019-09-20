import React from 'react';
import  { Link } from 'react-router-dom'; //import to get the current ID
import moment from 'moment';
import numeral from 'numeral';


const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{ description }</h3>
        </Link>
        <p> {numeral(amount / 100).format('$0,0.00')} 
        - 
        { moment(createdAt).format('MMMM Do, YYYY')} 
        </p>

    </div>
);

//the ExpenseListItem in connect gives us dispatch prop
export default ExpenseListItem;

