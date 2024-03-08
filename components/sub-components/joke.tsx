
"use client"
import React, { useState } from 'react';

const Jokes: React.FC = () => {
  const [joke, setJoke] = useState<string>('');

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
      const data = await response.json();
      if (data && data.joke) {
        setJoke(data.joke);
      } else {
        throw new Error('No joke found');
      }
    } catch (error) {
      setJoke('Failed to fetch joke');
    }
  };

  return (
    <div>
      <h1>Jokes</h1>
      <button onClick={fetchJoke}>Get Joke</button>
      {joke && <p>{joke}</p>}
    </div>
  );
};

export default Jokes;
