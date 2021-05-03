import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, href, className = '', size }) => {
  return (
    <a
      href={href}
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-primary
        hover:bg-primary-darker
        rounded
        text-white
        hover:text-white
    `}
    >
      {children}
    </a>
  );
};

export default Button;
