// BudgetSettings.js
import React, { useState, useContext } from 'react';
import { CurrencyContext } from './CurrencyContext';
import PropTypes from 'prop-types';

export const BudgetSettings = () => {
  const { budgetLimit, setBudgetLimit, alertThreshold, setAlertThreshold } = useContext(CurrencyContext);
  const [newLimit, setNewLimit] = useState(budgetLimit);
  const [newThreshold, setNewThreshold] = useState(alertThreshold);

  const handleLimitChange = (e) => setNewLimit(e.target.value);
  const handleThresholdChange = (e) => setNewThreshold(e.target.value);

  const handleSave = () => {
    setBudgetLimit(newLimit);
    setAlertThreshold(newThreshold);
  };

  return (
    <div>
      <h2>Budget Settings</h2>
      <label>
        Budget Limit:
        <input type="number" value={newLimit} onChange={handleLimitChange} />
      </label>
      <label>
        Alert Threshold:
        <input type="number" step="0.1" value={newThreshold} onChange={handleThresholdChange} />
      </label>
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
};

// Add PropTypes and defaultProps for BudgetSettings
BudgetSettings.propTypes = {
  budgetLimit: PropTypes.number,
  alertThreshold: PropTypes.number,
  setBudgetLimit: PropTypes.func,
  setAlertThreshold: PropTypes.func,
};

BudgetSettings.defaultProps = {
  budgetLimit: 0,
  alertThreshold: 0,
  setBudgetLimit: () => {},
  setAlertThreshold: () => {},
};