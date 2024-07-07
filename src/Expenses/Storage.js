// import React, { createContext, useContext, useState } from 'react';

// const ExpensesContext = createContext();

// export const useExpenses = () => useContext(ExpensesContext);

// export const ExpenseProvider = ({ children }) => {
//   const [expenses, setExpenses] = useState([]);

//   const addExpense = (newExpense) => {
//     setExpenses([...expenses, newExpense]);
//   };

//   return (
//     <ExpensesContext.Provider value={{ expenses, addExpense }}>
//       {children}
//     </ExpensesContext.Provider>
//   );
// };