import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Create a mailto link to open email client
      const mailtoLink = `mailto:mert@rated10.app,support@rated10.app?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `From: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\n\n${formData.message}`
      )}`;

      // Open user's email client
      window.location.href = mailtoLink;

      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  return (
    <div className="contact">
      <div className="page-content">
        <div className="container">
          <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email (required):
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="your@email.com"
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number (optional):
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject (required):
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  placeholder="How can we help you?"
                />
                {errors.subject && <div className="error-message">{errors.subject}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message (required):
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`form-input ${errors.message ? 'error' : ''}`}
                  placeholder="Tell us about your inquiry..."
                />
                {errors.message && <div className="error-message">{errors.message}</div>}
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
              
              {showSuccess && (
                <div className="success-message">
                  Message sent! Thank you for contacting us.
                </div>
              )}
            </form>

            <div className="contact-alternative">
              <p>
                Alternatively, contact us via email at{' '}
                <a href="mailto:support@rated10.app" className="email-link">
                  support@rated10.app
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 