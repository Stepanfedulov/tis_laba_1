import React, { useState } from 'react';
function App() {
  const [items, setItems] = useState([]);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const handleInputChange1 = (e) => {
    setInputValue1(e.target.value);
  };
  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
  };
  const handleInputChange3 = (e) => {
    setInputValue3(e.target.value);
  };
  const addItem = () => {
    setItems([...items, `${inputValue1} ${inputValue2} ${inputValue3}`]);
    setInputValue1('');
    setInputValue2('');
    setInputValue3('');
  };
  return (
    <div>
      <h1>Список элементов:</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue1}
        onChange={handleInputChange1}
        placeholder="Значение 1"
      />
      <input
        type="text"
        value={inputValue2}
        onChange={handleInputChange2}
        placeholder="Значение 2"
      />
      <input
        type="text"
        value={inputValue3}
        onChange={handleInputChange3}
        placeholder="Значение 3"
      />
      <button onClick={addItem}>Добавить элемент</button>
    </div>
  );
}
export default App;