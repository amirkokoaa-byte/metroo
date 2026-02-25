import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, showBack = false }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-600 text-white p-4 flex items-center shadow-md relative z-10">
      {showBack && (
        <button onClick={() => navigate(-1)} className="ml-4 p-1 hover:bg-blue-700 rounded-full">
          <ArrowRight className="w-6 h-6" />
        </button>
      )}
      <h1 className="text-xl font-bold flex-1 text-center ml-10">{title}</h1>
    </div>
  );
};
