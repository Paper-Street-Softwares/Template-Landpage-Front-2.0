import React, { useState } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <div>Tab content for Home</div>;
      case 'Profile':
        return <div>Tab content for Profile</div>;
      case 'Contact':
        return <div>Tab content for Contact</div>;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex border-b">
        <button
          className={`px-4 py-2 focus:outline-none border rounded-tl-md rounded-tr-md ${activeTab === 'Home' ? 'border-b-2 border-blue-500 text-blue-500 bg-blue-500 bg-opacity-20' : 'border-gray-300 text-gray-600 hover:border-blue-500 hover:border-opacity-50'}`}
          onClick={() => setActiveTab('Home')}
        >
          Home
        </button>
        <button
          className={`px-4 py-2 focus:outline-none border rounded-tl-md rounded-tr-md ${activeTab === 'Profile' ? 'border-b-2 border-blue-500 text-blue-500 bg-blue-500 bg-opacity-20' : 'border-gray-300 text-gray-600 hover:border-blue-500 hover:border-opacity-50'}`}
          onClick={() => setActiveTab('Profile')}
        >
          Profile
        </button>
        <button
          className={`px-4 py-2 focus:outline-none border rounded-tl-md rounded-tr-md ${activeTab === 'Contact' ? 'border-b-2 border-blue-500 text-blue-500 bg-blue-500 bg-opacity-20' : 'border-gray-300 text-gray-600 hover:border-blue-500 hover:border-opacity-50'}`}
          onClick={() => setActiveTab('Contact')}
        >
          Contact
        </button>
      </div>
      <div className="mt-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabComponent;
