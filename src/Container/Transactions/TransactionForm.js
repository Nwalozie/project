import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Removed unnecessary import of useSelector
import { addTransaction } from '../../Content/reducers'; // Changed the action import
import { v4 as uuidv4 } from 'uuid';
import './TransactionForm.css'

const TransactionForm = ({ type, onAddExpense }) => {
  const dispatch = useDispatch(); // Get dispatch function from useDispatch
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = uuidv4();

    // Convert the date string to a Date object
    const selectedDate = new Date(date);

    // Extract day, month, and year from the Date object
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth() + 1;
    const year = selectedDate.getFullYear();
    
    const totalDate = `${year}-${month}-${day}`;

    // Capture the current time
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    // Dispatch the addExpense action with the new expense data
    dispatch(addTransaction({
      type,
      transaction: { id, title, description, amount, category, date: { day, month, year, totalDate }, time: formattedTime }
    }));

    // Reset form fields
    setDescription('');
    setAmount('');
    setDate('');
    setCategory('');
    setTitle('');

    if (onAddExpense) {
      onAddExpense();
    }
  };

  return (
    <React.Fragment>
      <form className="expense-form" onSubmit={handleSubmit}>
            <input type="text" placeholder={`${type} title`} id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="number" placeholder={`${type} amount`} id='amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
            <input type="date" placeholder="Enter A Date" id='date' value={date} onChange={(e) => setDate(e.target.value)} />
            <select value={category} onChange={(e) => setCategory(e.target.value)} >
            <option value="">Select Option</option>
            <option value="salary">Salary</option>
            <option value="freelancing">Freelancing</option>
            <option value="investments">Investments</option>
            <option value="stocks">Stocks</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="bank_transfer">Bank Transfer</option>
            <option value="youtube">Youtube</option>
            <option value="other">Other</option>
            </select>
            <input type="text" placeholder="Add A Reference" id="description" value={description}
              onChange={(e) => setDescription(e.target.value)}  />
            <button type="submit" >+ Add {type}</button>
        </form>
     </React.Fragment>
  );
};

export default TransactionForm;
