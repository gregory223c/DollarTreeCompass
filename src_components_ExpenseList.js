import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses }) {
    return (
        <ul className="ExpenseList">
            {expenses.map((expense, index) => (
                <li key={index}>
                    {expense.description}: ${expense.amount.toFixed(2)}
                </li>
            ))}
        </ul>
    );
}

export default ExpenseList;
