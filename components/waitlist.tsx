"use client";

import React, { useState, useEffect } from 'react';

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'hidden_iframe';
    document.body.appendChild(iframe);

    return () => {
      document.body.removeChild(iframe);
    };
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email) {
      setError('Please enter your email.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLScRkwY198g2ho75hz1RMYRBKHVBRn4c39VWMd3Ir9hZokzw8g/formResponse?usp=pp_url&entry.424576630=${encodeURIComponent(email)}`;

    const form = document.createElement('form');
    form.action = googleFormUrl;
    form.method = 'POST';
    form.target = 'hidden_iframe';

    document.body.appendChild(form);
    form.submit();

    setEmail('');
    setSubmitted(true);
    setError(null);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="w-full max-w-lg bg-gray-800 p-8 rounded-xl shadow-2xl ">
      <h2 className="text-3xl font-bold mb-6 text-indigo-400 text-center">Join Our Waitlist</h2>
      <span className='text-xl text-center border-gray-700'>Still in the kitchen, in progress... Join the waitlist to be the first to access and try ANDL.</span>
      {submitted ? (
        <div className="text-gray-300 text-center">
          <p className="text-lg pt-8">Thank you for joining the waitlist!</p>
          <p className="mt-2">We'll contact you soon with more information.</p>
        </div>
      ) : (
        <form id='waitlist' onSubmit={handleSubmit} className="space-y-4 pt-8">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2 mt-4">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-600 bg-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold text-lg"
          >
            Join Waitlist
          </button>
        </form>
      )}
    </div>
  );
};

export default Waitlist;
