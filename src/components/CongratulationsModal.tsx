import React from 'react';

interface CongratulationsModalProps {
  onClose: () => void;
}

const CongratulationsModal: React.FC<CongratulationsModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md mx-auto text-center transform transition-transform">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">🎉 Congratulations! 🎉</h2>
        <p className="text-xl text-gray-800 mb-6">
          You have successfully labeled Sheldon Storm Baron Bakker as your Boyfriend!
        </p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-blue-600 transform hover:scale-110 transition-transform"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CongratulationsModal;
