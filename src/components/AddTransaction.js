import React, {useState, useContext} from "react";

import { GlobalContext } from "../context/GlobalState";
export const AddTransaction =() => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [expenseType, setExpenseType] = useState('Household');

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction ={
            id: Math.floor(Math.random() * 100000000),
            expenseType,
            text,
            amount: +amount
        }
        console.log(expenseType);
       
        addTransaction(newTransaction);
    }

    return(
        <>
            <h3>Add new transaction</h3>
            <form onSubmit = {onSubmit}>
                <div className="form-control">
                    <label>Category:</label>
                    <select value={expenseType} onChange={(e) => {console.log(e.target.value); setExpenseType(e.target.value)}} name="options">
                        <option value="Household" >Household</option>
                        <option value="Study">Study</option>
                        <option value="leisure">leisure</option>
                        <option value="Income">Income</option>
                    </select>
                </div>

                <div className="form-control">
                    <label>Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
        
    )
}