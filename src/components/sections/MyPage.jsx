import React from 'react';
import TabComponent from '../sectionElements/TabComponent';

const MyPage = () => {
  const tabs = [
    {
      label: 'Home',
      content: {
        paragraph: 'This is the Home tab content.'
      }
    },
    {
      label: 'Profile',
      content: {
        paragraph: 'This is the Profile tab content.'
      }
    },
    {
      label: 'Contact',
      content: {
        paragraph: 'This is the Contact tab content.'
      }
    }
  ];

  return (
    <div>
      <TabComponent tabs={tabs} />
    </div>
  );
};

export default MyPage;
