import React, { useState } from 'react';

// Function to check if a string is a palindrome
const isPalindrome = (str: string): boolean => {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanedStr === cleanedStr.split('').reverse().join('');
};

const PalindromeChecker: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleCheck = () => {
    if (isPalindrome(input)) {
      setResult('Yes, it is a palindrome!👍');
    } else {
      setResult('No, it is not a palindrome.🤣');
    }
  };

  return (
    <div>
      <h1>Palindrome Checker</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter text here"
      />
      <button onClick={handleCheck}>Check</button>
      <p>{result}</p>
    </div>
  );
};

export default PalindromeChecker;
