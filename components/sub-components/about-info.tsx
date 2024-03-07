import React from 'react';
interface InfoItem {
    text: string;
    className?: string;
  }
interface InfoItemProps {
  item: InfoItem;
}

const InfoItem: React.FC<InfoItemProps> = ({ item }) => {
  if (item.className) {
    return (
      <span className={item.className}>
        {item.text}
      </span>
    );
  }

  return (
    <span>
      {item.text}
    </span>
  );
};

export default InfoItem;