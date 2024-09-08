"use client";

import React from 'react';

const ContactInfo: React.FC = () => {
  return (
    <div id='contact' className="hover:bg-gray-700 transition duration-300 w-full max-w-lg bg-gray-800 p-8 rounded-xl shadow-2xl flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-6 text-indigo-400 text-center">Contact Us</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-300">Location</h3>
          <p className="text-gray-400">Mekelweg 5, 2628 CD Delft
          <br />South Holland</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-300">Email</h3>
          <p className="text-gray-400">team@andl.io</p>
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
