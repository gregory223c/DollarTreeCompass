import React from 'react';
import './Receipt.css';

function Receipt({ expenseData }) {
    return (
        <div className="Receipt">
            <h2>Expense Receipt</h2>
            <ul>
                {expenseData.map((item, index) => (
                    <li key={index}>{item.description}: ${item.amount.toFixed(2)}</li>
                ))}
            </ul>
            <p>Total: ${expenseData.reduce((total, item) => total + item.amount, 0).toFixed(2)}</p>
        </div>
    );
}

export default Receipt;
