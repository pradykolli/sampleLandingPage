// @ts-ignore
// @ts-ignore
import React, { useState } from 'react';
// @ts-ignore
import '../styles/Waitlist.css';
import type { WaitlistFormData } from '../types';

interface WaitlistProps {
  onSubmit?: (email: string) => void;
  label?: string;
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
  noteText?: string;
}

const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const Waitlist: React.FC<WaitlistProps> = ({
  onSubmit,
  label = 'Drop 001 — 2035 Be First',
  placeholder = 'your@email.com',
  buttonText = 'Notify Me',
  successMessage = "You're in. Watch for DROP 001 — 2035.",
  noteText = '100 units · no restock · no exceptions',
}) => {
  const [formData, setFormData] = useState<WaitlistFormData>({
    email: '',
    submitted: false,
    error: undefined,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.currentTarget.value;
    setFormData({ email, submitted: false, error: undefined });
  };

  const handleSubmit = () => {
    if (!formData.email) {
      setFormData((prev) => ({
        ...prev,
        error: 'Email is required',
      }));
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormData((prev) => ({
        ...prev,
        error: 'Please enter a valid email address',
      }));
      return;
    }

    if (onSubmit) {
      onSubmit(formData.email);
    }

    setFormData({
      email: '',
      submitted: true,
      error: undefined,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="waitlist">
      <div className="waitlistLabel">{label}</div>

      {!formData.submitted ? (
        <>
          <div className="waitlistRow">
            <input
              className="waitlistInput"
              type="email"
              placeholder={placeholder}
              value={formData.email}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              aria-label="Email address for waitlist"
            />
            <button
              className="waitlistBtn"
              onClick={handleSubmit}
              aria-label={buttonText}
            >
              {buttonText}
            </button>
          </div>
          {formData.error && (
            <div className="errorMessage">{formData.error}</div>
          )}
          <div className="waitlistNote">{noteText}</div>
        </>
      ) : (
        <>
          <div className="successMsg">{successMessage}</div>
          <div className="waitlistNote">{noteText}</div>
        </>
      )}
    </div>
  );
};

export default Waitlist;
