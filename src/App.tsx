import React, { useState } from 'react';
import NameForm from './components/NameForm';
import QuestionModal from './components/QuestionModal';
import Layout from './components/Layout';
import ResponseModal from './components/ResponseModal';

const App: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [isPositiveResponse, setIsPositiveResponse] = useState(true);
  const [userName, setUserName] = useState<{ firstName: string; lastName: string }>({ firstName: '', lastName: '' });
  const [userEmail, setUserEmail] = useState<string>('');

  // Handle form submission
  const handleFormSubmit = (firstName: string, lastName: string, email: string) => {
    setUserName({ firstName, lastName });
    setUserEmail(email);
    setSubmitted(true);
  };

  // Handle user response (Yes/No)
  const handleAnswer = async (response: 'Yes' | 'No') => {
    // Send email based on user response
    await sendEmail(`${userName.firstName} ${userName.lastName}`, userEmail, response);
    setIsPositiveResponse(response === 'Yes');
    setShowResponse(true);
  };

  // Send email to the user
  const sendEmail = async (name: string, email: string, response: 'Yes' | 'No') => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('response', response);

    try {
      const res = await fetch('/send_email.php', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Failed to send email');
      }
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  // Handle closing the response modal
  const handleCloseResponse = () => {
    setShowResponse(false);
  };

  return (
    <Layout>
      {!submitted ? (
        <NameForm onSubmit={handleFormSubmit} />
      ) : (
        <QuestionModal onAnswer={handleAnswer} />
      )}

      {showResponse && (
        <ResponseModal
          onClose={handleCloseResponse}
          isPositiveResponse={isPositiveResponse} userEmail={''} userName={''}        />
      )}
    </Layout>
  );
};

export default App;
