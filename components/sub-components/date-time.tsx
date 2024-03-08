// Datetime.tsx
import React from 'react';

const Datetime: React.FC = () => {
  const getCurrentDatetime = (): string => {
    const now = new Date();
    return now.toLocaleString();
  };

  return (
    <div>
      <p>Current Date and Time: {getCurrentDatetime()}</p>
    </div>
  );
};

export default Datetime;
