import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onAddExpense }) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description && amount) {
            onAddExpense({ description, amount: parseFloat(amount) });
            setDescription('');
            setAmount('');
        }
    };

    return (
        <form className="ExpenseForm" onSubmit={handleSubmit}>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
            />
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                required
            />
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpenseForm;
