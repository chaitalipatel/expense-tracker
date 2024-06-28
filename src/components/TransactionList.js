import React, {useContext, useState, useEffect} from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";




export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    const [selectedExpenseType, setSelectedExpenseType] = useState('all');

    const [filteredTransactions, setFilteredTransactions] = useState(transactions);

    useEffect(()=>{
        updateFilteredTransaction();
    }, [transactions,selectedExpenseType])

    const updateFilteredTransaction = () => {
        if (selectedExpenseType === 'all') {
            setFilteredTransactions(transactions);
          } else {
              const filteredTrans = transactions.filter(transaction => transaction.expenseType === selectedExpenseType);
              console.log(transactions, filteredTrans, selectedExpenseType);
              setFilteredTransactions(filteredTrans);
          }
    }

    const handleChange = (event) => {
        const category = event.target.value;
        setSelectedExpenseType(category);
    }
    return (
        <>
            <h3>History</h3>
            <select name="options"value={selectedExpenseType} onChange={handleChange }>
                <option value="all">All</option>
                <option value="Household">Household</option>
                <option value="Study">Study</option>
                <option value="leisure">leisure</option>
                <option value="Income">Income</option>
            </select>
            <ul className="list">
                {filteredTransactions.map(transaction =>(
                    <Transaction key={transaction.id}  transaction={transaction}/>
                ))}
                
            </ul>
        </>
    )
}