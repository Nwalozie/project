import { useEffect, useContext } from 'react';
import { CurrencyContext } from './CurrencyContext';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectExpenses } from '../../Content/reducers';

export const BudgetAlerts = () => {

// const income = useSelector(selectIncome);
  const expense = useSelector(selectExpenses);

//   const incomeAmount = income.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
  const expenseAmount = expense.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
  const { budgetLimit, alertThreshold } = useContext(CurrencyContext);


  useEffect(() => {
    if (expenseAmount >= budgetLimit * alertThreshold) {
      toast.warning('You are approaching your budget limit!');
    }
    if (expenseAmount >= budgetLimit) {
      toast.error('You have exceeded your budget limit!');
    }
  }, [expenseAmount, budgetLimit, alertThreshold]);

  return null; // This hook does not return anything
};

