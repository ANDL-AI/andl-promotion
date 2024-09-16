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
    <section id="waitlist" className="px-4 pb-16 pt-2 bg-[#f9f9f9]">
      <h2 className="text-3xl font-bold text-center mb-8">Join Our Waitlist</h2>
      {enrolledCount !== null && (
        <p className="text-lg text-center mb-4 font-semibold">
          <span className='font-semibold text-[#6321E6]'>{enrolledCount}</span> people have already joined the waitlist!
        </p>
      )}
      <p className="text-center mb-8 max-w-2xl mx-auto">
        Be the first to experience the future of education. Sign up for our waitlist and get early access to ANDL.
      </p>
      {submitted ? (
        <div className="text-hs-fourth text-center">
          <p className="text-lg pt-8">Thank you for joining the waitlist!</p>
          <p className="mt-2">We'll contact you soon with more information.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex items-center border-b-2 border-[#6321E6] py-2">
            <input 
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-gray-700" 
              type="email" 
              placeholder="Enter your email" 
              aria-label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              className="flex-shrink-0 bg-[#000000] hover:bg-[#4A1AAB] text-sm text-white py-2 px-4 rounded-full transition-colors duration-300" 
              type="submit"
            >
              Join Waitlist
            </button>
          </div>
          {error && <p className="text-red-400 text-sm text-center mt-2">{error}</p>}
        </form>
      )}
    </section>
  )
}

export default Waitlist;
