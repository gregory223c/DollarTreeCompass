import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Receipt from './components/Receipt';
import ExpenseForm from './components/ExpenseForm';

function App() {
    const [expenses, setExpenses] = useState([]);

    const handleAddExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    return (
        <div className="App">
            <Header />
            <ExpenseForm onAddExpense={handleAddExpense} />
            <Receipt expenseData={expenses} />
        </div>
    );
}

export default App;
