import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserProfile } from '../../Content/actions'
import { useNavigate } from 'react-router-dom';
import { CurrencyContext } from '../Currency/CurrencyContext';
import './UserProfile.css';

export const UserProfile = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.transactions.user)
    const { availableCurrencies } = useContext(CurrencyContext);
    const navigate = useNavigate();
    

    const [formData, setFormData] = useState({
      firstName: user ? user.firstName : '',
      lastName: user ? user.lastName : '',
      email: user ? user.email : '',
      mobileNumber: user ? user.mobileNumber : '',
      gender: user ? user.gender : '',
      id: user ? user.id : '',
      country: user ? user.country : '',
      budgetLimit: user ? user.budgetLimit : '',
      currency: user ? user.currency : '',
      estimatedMonthlyIncome: user ? user.estimatedMonthlyIncome : '',
      age: user ? user.age : '',
      profession: user ? user.profession : '',
    });

    useEffect(() => {
      setFormData({
        firstName: user ? user.firstName : '',
        lastName: user ? user.lastName : '',
        email: user ? user.email : '',
        mobileNumber: user ? user.mobileNumber : '',
        gender: user ? user.gender : '',
        id: user ? user.id : '',
        country: user ? user.country : '',
        budgetLimit: user ? user.budgetLimit : '',
        currency: user ? user.currency : '',
        estimatedMonthlyIncome: user ? user.estimatedMonthlyIncome : '',
        age: user ? user.age : '',
        profession: user ? user.profession : '',
      });
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(updateUserProfile(formData));
        navigate('/home');
    };

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit} className="user-profile-form">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            />
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            />
            <label>Female</label>
          </div>
        </div>
        <div className="form-group">
          <label>ID</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Budget Limit</label>
          <input
            type="number"
            name="budgetLimit"
            value={formData.budgetLimit}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Currency</label>
          <select
            name="currency"
            value={formData.currency}
            onChange={handleChange}
          >
            {availableCurrencies.map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Estimated Monthly Income</label>
          <input
            type="number"
            name="estimatedMonthlyIncome"
            value={formData.estimatedMonthlyIncome}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Profession</label>
          <input
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="save-changes-btn" >Save Changes</button>
      </form>
    </div>
  );
};
