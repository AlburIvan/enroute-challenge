import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  Icon: IconType;
  title: string;
  onClick?: () => void;
}

const IconButton: React.FC<ButtonProps> = ({ Icon, title, onClick }: ButtonProps) => {
  return (
    <button
      className='p-2.5 transition-all duration-200 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white'
      onClick={onClick}>
      <Icon />
      <span className='sr-only'>{title}</span>
    </button>
  );
};

export default IconButton;
