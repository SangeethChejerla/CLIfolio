import React from 'react';

interface Command {
    name: string;
    description: string;
  }

interface CommandProps {
  command: Command;
}

const CommandItem: React.FC<CommandProps> = ({ command }) => {
  return (
    <div>
      <span className="text-teal-400 ml-3">{command.name}</span> - {command.description}
    </div>
  );
};

export default CommandItem;