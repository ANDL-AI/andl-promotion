"use client";
import React, { useState, useEffect } from 'react';

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [enrolledCount, setEnrolledCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchEnrolledCount = async () => {
      try {
        const sheetUrl = 'https://docs.google.com/spreadsheets/d/1Df_ySvndRqOWlBVcNxocSGaXU8vWolWZoc4Wyfn1wtA/gviz/tq?tqx=out:csv&sheet=Sheet1';
        const response = await fetch(sheetUrl);
        const data = await response.text();
        const rows = data.split('\n');
        const count = rows.length - 1; // Exclude header row
        setEnrolledCount(count);
      } catch (error) {
        console.error('Error fetching enrolled count:', error);
      }
    };

    fetchEnrolledCount();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    if (!email) {
      setError('Please enter your email.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    // Prepare the form data
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScRkwY198g2ho75hz1RMYRBKHVBRn4c39VWMd3Ir9hZokzw8g/formResponse';
    const formData = new FormData();
    formData.append('entry.424576630', email);
  
    try {
      // Submit the form data using fetch
      await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors', // This is important because Google Forms does not support CORS
        body: formData,
      });
  
      // On success, reset the email input and show success message
      setEmail('');
      setSubmitted(true);
      setError(null);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('An error occurred while submitting the form. Please try again.');
    }
  };
  
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="w-full max-w-lg bg-gray-800 p-8 rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-indigo-400 text-center">Join Our Waitlist</h2>
      {enrolledCount !== null && (
        <p className="text-lg text-center text-gray-300 mb-4 font-bold">
          <span className='font-semibold text-hs-third'>{enrolledCount}</span> people have already joined the waitlist!
        </p>
      )}
      <span className="text-xl text-center border-gray-700">
        Still in the kitchen, in progress... Join the waitlist to be the first to access and try ANDL.
      </span>
      {submitted ? (
        <div className="text-gray-300 text-center">
          <p className="text-lg pt-8">Thank you for joining the waitlist!</p>
          <p className="mt-2">We'll contact you soon with more information.</p>
        </div>
      ) : (
        <form id="waitlist" onSubmit={handleSubmit} className="space-y-4 pt-8">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2 mt-4">
              Email Address
            </label>
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
