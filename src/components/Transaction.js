import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    
    return (
        <li className={transaction.amount < 0 ? 'Transaction minus' : 'Transaction plus'}>
            {transaction.description}
            <span className="amount">
                {sign}${Math.abs(transaction.amount)}
            </span>
            <button className="btn-delete" onClick={() => deleteTransaction(transaction.id)}>
                &times;
            </button>
        </li>
    )
}
