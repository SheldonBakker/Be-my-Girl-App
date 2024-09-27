import React, { useState } from 'react';

interface NameFormProps {
  onSubmit: (firstName: string, lastName: string, email: string) => void;
}

const NameForm: React.FC<NameFormProps> = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName && lastName && email) {
      onSubmit(firstName, lastName, email);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="bg-pink-50 p-10 rounded-3xl shadow-xl max-w-md mx-auto border border-pink-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 h-24 w-24 bg-pink-200 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 h-24 w-24 bg-pink-200 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
      <h2 className="text-3xl font-semibold text-center mb-4 text-pink-600">💖 Enter Your Details 💖</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border border-pink-300 rounded-full p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border border-pink-300 rounded-full p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-pink-300 rounded-full p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          required
        />
        <button
          type="submit"
          className="bg-pink-500 text-white px-4 py-3 rounded-full w-full transition-transform transform hover:scale-105 hover:bg-pink-600 focus:outline-none"
        >
          💌 Submit 💌
        </button>
      </form>
    </div>
  );
};

export default NameForm;
