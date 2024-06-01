import { useEffect, useState } from 'react';
import './App.css';

const useDebounce = (text, delay) => {
  const [debouncedText, setDebouncedText] = useState('Waiting for input');
  useEffect(() => {
    if (!text) return;
    setDebouncedText("loading...");
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay])

  return debouncedText;
}

const App = () => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => setText(e.target.value);
  const debouncedText = useDebounce(text, 1000);

  return (
    <div className="App">
      <h1>Debounce Hook</h1>
      <input type='text' onChange={handleInputChange}/>
      <p>Debounced value: {debouncedText}</p>
    </div>
  );
}

export default App;
