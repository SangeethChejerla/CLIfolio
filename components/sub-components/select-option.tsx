"use client"

// ConfirmationPrompt.tsx
import React, { useState, useEffect, useRef } from 'react';

interface ConfirmationPromptProps {
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}

const ConfirmationPrompt: React.FC<ConfirmationPromptProps> = ({
  onConfirm,
  onCancel,
  message,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const options = ['Yes', 'No'];
  const promptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowUp' && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      } else if (event.key === 'ArrowDown' && selectedIndex < options.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      } else if (event.key === 'Enter') {
        if (selectedIndex === 0) {
          onConfirm();
        } else {
          onCancel();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, onConfirm, onCancel, options.length]);

  useEffect(() => {
    if (promptRef.current) {
      promptRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={promptRef}
      tabIndex={-1}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <p className="mb-2">{message}</p>
        {options.map((option, index) => (
          <button
            key={option}
            className={`block w-full text-left p-2 ${
              selectedIndex === index ? 'bg-blue-500 text-white' : 'hover:bg-gray-500'
            }`}
            onClick={() => (index === 0 ? onConfirm() : onCancel())}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ConfirmationPrompt;
