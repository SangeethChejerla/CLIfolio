import React from 'react';
interface SocialItem {
    text: string;
    className?: string;
    href?: string;
  }

interface SocialItemProps {
  item: SocialItem;
}

const SocialItem: React.FC<SocialItemProps> = ({ item }) => {
  if (item.href) {
    return (
      <div>
        <span className={item.className}>
          <a href={item.href}>{item.text}</a>
        </span>
      </div>
    );
  }

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

export default SocialItem;
