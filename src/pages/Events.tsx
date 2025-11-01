import React from 'react';
import Events from '../components/Events';

const EventsPage: React.FC = () => {
  const handleRegister = (title: string) => {
    // placeholder handler — keep lightweight and non-blocking
    console.log(`Register called for: ${title}`);
  };

  return (
    <div className="pt-32 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <Events onRegisterEvent={handleRegister} />
    </div>
  );
};

export default EventsPage;