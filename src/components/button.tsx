import React from 'react';

const Button = ({ 
  children, 
  onClick = undefined, 
  className = '',
  variant = 'default',
  size = 'md',
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg transition-colors duration-200 font-medium focus:outline-none';
  
  const variants = {
    default: 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900',
    ghost: 'text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-4 text-lg',
  };

  const disabledStyles = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabledStyles}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
