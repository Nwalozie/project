// EnhancedUserProfile.js
import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile, uploadAvatar, deleteAvatar } from '../../Content/actions';
import { CurrencyContext } from '../Currency/CurrencyContext';
import './EnhancedUserProfile.css';

export const EnhancedUserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.transactions.user);
  const { availableCurrencies } = useContext(CurrencyContext);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    gender: '',
    id: '',
    taxIdentificationNumber: '',
    taxIdentificationCountry: '',
    country: '',
    budgetLimit: '',
    currency: '',
    estimatedMonthlyIncome: '',
    age: '',
    profession: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        mobileNumber: user.mobileNumber || '',
        gender: user.gender || '',
        id: user.id || '',
        country: user.country || '',
        budgetLimit: user.budgetLimit || '',
        currency: user.currency || '',
        estimatedMonthlyIncome: user.estimatedMonthlyIncome || '',
        age: user.age || '',
        profession: user.profession || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(formData));
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(uploadAvatar(file));
    }
  };

  const handleAvatarDelete = () => {
    dispatch(deleteAvatar());
  };

  return (
    <div className="enhanced-user-profile-container">
      <h2>User Profile</h2>
      <div className="avatar-container">
        <img src={user.avatar || '/default-avatar.png'} alt="User Avatar" className="user-avatar" />
        <div className="avatar-actions">
          <input type="file" id="avatar-upload" onChange={handleAvatarUpload} style={{ display: 'none' }} />
          <label htmlFor="avatar-upload" className="upload-btn">Upload New</label>
          <button className="delete-btn" onClick={handleAvatarDelete}>Delete Avatar</button>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="enhanced-user-profile-form">
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
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Tax Identification Number</label>
          <input
            type="text"
            name="taxIdentificationNumber"
            value={formData.taxIdentificationNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Tax Identification Country</label>
          <input
            type="text"
            name="taxIdentificationCountry"
            value={formData.taxIdentificationCountry}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Residential Address</label>
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
        <button type="submit" className="save-changes-btn">Save Changes</button>
      </form>
    </div>
  );
};
