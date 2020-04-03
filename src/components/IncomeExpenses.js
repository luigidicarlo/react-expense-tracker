import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts
        .filter(amount => amount > 0)
        .reduce((count, amount) => (count += amount), 0)
        .toFixed(2);
    const expense = amounts
        .filter(amount => amount < 0)
        .reduce((count, amount) => (count += Math.abs(amount)), 0)
        .toFixed(2);

    return (
        <div className="IncomeExpenses">
            <div>
                <h4>Income</h4>
                <p className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{expense}</p>
            </div>
        </div>
    )
}
