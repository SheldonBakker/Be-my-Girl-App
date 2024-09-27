import React from 'react';

interface QuestionModalProps {
  onAnswer: (response: 'Yes' | 'No') => void;
}

const QuestionModal: React.FC<QuestionModalProps> = ({ onAnswer }) => {
  return (
    <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md mx-auto text-center transform transition-transform hover:scale-105">
      <p className="text-4xl font-bold text-purple-800 mb-4">
        💖 Do you want to be my girlfriend? 💖
      </p>
      <div className="mt-6 flex justify-center space-x-8">
        <button
          onClick={() => onAnswer('Yes')}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full shadow-lg font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-110 transition-transform"
        >
          Yes
        </button>
        <button
          onClick={() => onAnswer('No')}
          className="bg-gray-300 text-gray-800 px-8 py-3 rounded-full shadow-lg font-semibold hover:bg-gray-400 transform hover:scale-110 transition-transform"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default QuestionModal;
