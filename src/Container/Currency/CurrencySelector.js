// CurrencySelector.js
import React, { useContext } from 'react';
import { CurrencyContext } from './CurrencyContext';
import PropTypes from 'prop-types';

export const CurrencySelector = () => {
  const { currency, setCurrency, availableCurrencies } = useContext(CurrencyContext);

  return (
    <div>
      <label>Select Currency: </label>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        {availableCurrencies.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
    </div>
  );
};

// Add PropTypes and defaultProps for CurrencySelector
CurrencySelector.propTypes = {
  currency: PropTypes.string,
  setCurrency: PropTypes.func,
  availableCurrencies: PropTypes.arrayOf(PropTypes.string),
};

CurrencySelector.defaultProps = {
  currency: 'USD',
  setCurrency: () => {},
  availableCurrencies: ['USD'],
};