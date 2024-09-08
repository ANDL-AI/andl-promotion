"use client";

import React from 'react';

const ContactInfo: React.FC = () => {
  return (
    <div id='contact' className="w-full max-w-lg bg-gray-800 p-8 rounded-xl shadow-2xl flex flex-col justify-start ">
      <h2 className="text-4xl font-bold mb-6 text-indigo-400 text-center">Contact Us</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-300">Location</h3>
          <p className="text-gray-400">Mekelweg 5, 2628 CD Delft
          <br />South Holland, Netherlands</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-300">Email</h3>
          <p className="text-gray-400"><a href="mailto:team@andl.io"
          className='hover:text-indigo-400 transition-all border-b border-gray-700'
          >team@andl.io</a></p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-300">LinkedIn</h3>
          <p className="text-gray-400"><a href="https://www.linkedin.com/company/andl-ai/"
          className='hover:text-indigo-400 transition-all border-b border-gray-700'
          >https://www.linkedin.com/company/andl-ai/</a></p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-300">Phone</h3>
          <p className="text-gray-400">(06) 84 45 07 81</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
