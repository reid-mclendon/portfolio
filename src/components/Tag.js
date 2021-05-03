import React from 'react';


const Tag = ({ children, className = ''}) => {
    return (
      <div
        className={`
          ${className}
          bg-pink
          text-primary-darker
          flex
          justify-center
          items-center
          rounded-full
          py-2
          px-4
      `}
      >
        {children}
      </div>
    );
  };
  

export default Tag;