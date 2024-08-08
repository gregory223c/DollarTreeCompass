import React from 'react';
import './App.css';
import Receipt from './components/Receipt';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>DollarTreeCompass</h1>
            </header>
            <main>
                <Receipt />
            </main>
        </div>
    );
}

export default App;
