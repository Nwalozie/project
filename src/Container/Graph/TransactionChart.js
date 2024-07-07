import React, { useState } from 'react';
import {
  BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { useSelector } from 'react-redux';
import { selectIncome, selectExpenses } from '../../Content/reducers';
import moment from 'moment';
import PropTypes from 'prop-types';
import './TransactionChart.css';

export const TransactionChart = () => {
  const [view, setView] = useState('income'); // Options: 'income', 'expense', 'categoryExpense'
  const [timeframe, setTimeframe] = useState('daily'); // Options: 'daily', 'monthly'
  const [chartType, setChartType] = useState('bar'); // Options: 'bar', 'area', 'line'

  const income = useSelector(selectIncome);
  const expenses = useSelector(selectExpenses);

  const getTransactions = () => {
    if (view === 'income') return income;
    if (view === 'expense') return expenses;
    if (view === 'categoryExpense') {
      // Group by expense category and sum amounts
      const categories = expenses.reduce((acc, curr) => {
        acc[curr.title] = (acc[curr.title] || 0) + curr.amount;
        return acc;
      }, {});
      return Object.keys(categories).map(key => ({ title: key, amount: categories[key] }));
    }
    return [];
  };

  const getFilteredData = () => {
    const transactions = getTransactions();

    if (timeframe === 'monthly') {
      // Group by month
      const months = transactions.reduce((acc, curr) => {
        const month = moment(curr.date).format('MMMM');
        acc[month] = (acc[month] || 0) + curr.amount;
        return acc;
      }, {});
      return Object.keys(months).map(key => ({
        name: key,
        amount: months[key],
      })).sort((a, b) => moment(a.name, 'MMMM').month() - moment(b.name, 'MMMM').month());
    } else if (timeframe === 'daily') {
      // Sort by date and return transactions
      return transactions
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map(t => ({ name: moment(t.date).format('YYYY-MM-DD'), amount: t.amount, description: t.description }));
    }

    return transactions;
  };

  const filteredData = getFilteredData();

  return (
    <div className="transaction-chart-container">
      <div className="transaction-chart-controls">
        <label>View: </label>
        <select value={view} onChange={(e) => setView(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
          <option value="categoryExpense">Expense by Category</option>
        </select>

        <label>Timeframe: </label>
        <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)}>
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
        </select>

        <label>Chart Type: </label>
        <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
          <option value="bar">Bar Chart</option>
          <option value="area">Area Chart</option>
          <option value="line">Line Chart</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        {chartType === 'bar' ? (
          <BarChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Amount', angle: -90, position: 'insideLeft' }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="amount" fill="#8884d8" isAnimationActive={true} />
          </BarChart>
        ) : chartType === 'area' ? (
          <AreaChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Amount', angle: -90, position: 'insideLeft' }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area type="monotone" dataKey="amount" stroke="#8884d8" fill="#8884d8" isAnimationActive={true} />
          </AreaChart>
        ) : (
          <LineChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Amount', angle: -90, position: 'insideLeft' }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line type="monotone" dataKey="amount" stroke="#8884d8" isAnimationActive={true} />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p className="intro">{`Amount: $${payload[0].value}`}</p>
        {payload[0].payload.description && (
          <p className="desc">{`Description: ${payload[0].payload.description}`}</p>
        )}
      </div>
    );
  }

  return null;
};

// Add PropTypes and defaultProps for TransactionChart
TransactionChart.propTypes = {
  income: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      description: PropTypes.string,
    })
  ),
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      description: PropTypes.string,
    })
  ),
};

TransactionChart.defaultProps = {
  income: [],
  expenses: [],
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      payload: PropTypes.shape({
        description: PropTypes.string,
      }),
    })
  ),
  label: PropTypes.string,
};

CustomTooltip.defaultProps = {
  active: false,
  payload: [],
  label: '',
};


