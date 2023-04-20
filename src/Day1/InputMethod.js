import React,{useState} from 'react'

function InputMethod() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <h1>Get the input box value </h1>
       <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>You typed: {inputValue}</p>
    </div>
    </>
  )
}

export default InputMethod