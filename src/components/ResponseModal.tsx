import React, { useState } from 'react';

interface ResponseModalProps {
  onClose: () => void;
  isPositiveResponse: boolean; // Determines if the response is positive or negative
  userEmail: string;           // The email of the user
  userName: string;            // The name of the user
}

const ResponseModal: React.FC<ResponseModalProps> = ({ onClose, isPositiveResponse, userEmail, userName }) => {
  const [isSending, setIsSending] = useState(false);

  const handleSendEmail = async () => {
    setIsSending(true);

    const emailResponse = isPositiveResponse ? 'Yes' : 'No';
    try {
      const response = await fetch('http://localhost:8000/send_email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: userName,
          email: userEmail,
          response: emailResponse,
        }),
      });

      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSending(false);
      onClose(); // Close the modal after sending the email
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-r from-pink-400 to-purple-500 p-10 rounded-3xl shadow-xl max-w-md mx-auto text-center transform transition-transform">
        <h2 className="text-4xl font-bold mb-4 text-white">
          {isPositiveResponse ? '🎉 Congratulations! 🎉' : '😢 Oh no! 😢'}
        </h2>
        <p className="text-lg text-white mb-6">
          {isPositiveResponse
            ? 'You have successfully labeled Sheldon Storm Baron Bakker as your Boyfriend!'
            : 'You have selected No, but this is not recognized, so we are defaulting to Yes.'}
        </p>
        <button
          onClick={handleSendEmail}
          className="bg-white text-purple-600 px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-gray-100 transform hover:scale-110 transition-transform"
          disabled={isSending} // Disable the button while sending email
        >
          {isSending ? 'Sending...' : 'Close'}
        </button>
      </div>
    </div>
  );
};

export default ResponseModal;
