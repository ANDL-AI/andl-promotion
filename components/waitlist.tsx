"use client";
import React, { useState, useEffect } from 'react';

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Create and append a hidden iframe to the document
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'hidden_iframe';
    document.body.appendChild(iframe);

    // Clean up iframe on component unmount
    return () => {
      document.body.removeChild(iframe);
    };
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Simple validation
    if (!email) {
      setError('Please enter your email.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Generate the Google Form URL with the email pre-filled
    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLScRkwY198g2ho75hz1RMYRBKHVBRn4c39VWMd3Ir9hZokzw8g/formResponse?usp=pp_url&entry.424576630=${encodeURIComponent(email)}`;

    // Create a form element and submit it via the hidden iframe
    const form = document.createElement('form');
    form.action = googleFormUrl;
    form.method = 'POST';
    form.target = 'hidden_iframe';

    // Append the form to the body and submit it
    document.body.appendChild(form);
    form.submit();

    // Reset email field and state
    setEmail('');
    setSubmitted(true);
    setError(null);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-hs-background py-4 px-6"
    id='waitlist'>
      <div className="max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-hs-secondary text-center">Join Our Waitlist</h2>
        {submitted ? (
          <div className="text-hs-third text-center">
            <p>Thank you for joining the waitlist! We will contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-hs-base p-6 rounded-lg shadow-lg">
            <label htmlFor="email" className="block text-lg font-medium text-hs-secondary mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-hs-third rounded-lg mb-4"
              placeholder="Enter your email"
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-hs-third text-hs-base py-2 rounded-lg hover:bg-hs-fourth transition duration-300"
            >
              Join Waitlist
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Waitlist;
