import React, { useState } from "react";

const TabButton = ({ tabName, label, isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 focus:outline-none border rounded-tl-md rounded-tr-md ${
        isActive
          ? "border-b-2 border-blue-500 text-blue-500 bg-blue-500 bg-opacity-20"
          : "border-gray-300 text-gray-600 hover:border-blue-500 hover:border-opacity-50"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const TabContent = ({ content }) => {
  return <div className="py-8">{content}</div>;
};

const TabComponent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const activeContent = tabs.find((tab) => tab.label === activeTab).content;

  return (
    <div className="container mx-auto p-4">
      <div className="flex border-b">
        {tabs.map((tab) => (
          <TabButton
            key={tab.key}
            label={tab.label}
            isActive={activeTab === tab.label}
            onClick={() => setActiveTab(tab.label)}
          />
        ))}
      </div>
      <TabContent content={activeContent} />
    </div>
  );
};

export default TabComponent;
