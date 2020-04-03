import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            description,
            amount
        };

        addTransaction(newTransaction);
    }

    return (
        <div className="AddTransaction">
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label>Description</label>
                    <input type="text" placeholder="Enter description..." value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-control">
                    <label>Amount (negative - expense, positive - income)</label>
                    <input type="number" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(+e.currentTarget.value)} />
                </div>
                <button className="btn" type="submit">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
