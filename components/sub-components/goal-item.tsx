import React from 'react';

interface GoalItem {
    text: string;
    className?: string;
  }
interface InterestItemProps {
  item: GoalItem;
}

const InterestItem: React.FC<InterestItemProps> = ({ item }) => {
  if (item.className) {
    return (
      <div>
        <span className={item.className}>
          {item.text}
        </span>
      </div>
    );
  }

  return (
    <div>
      {item.text}
    </div>
  );
};

export default InterestItem;
