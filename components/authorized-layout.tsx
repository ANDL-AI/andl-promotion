"use client";

import React from "react";
import { useState } from "react";

const AuthorizedLayout: React.FC<React.PropsWithChildren> = ({ children }) => {

  return (<div className='min-h-screen'>
    <div className="flex">
      <div className='flex flex-col flex-grow w-screen md:w-full min-h-screen'>
        {children}
      </div>
    </div>
  </div>);
};

export default AuthorizedLayout;