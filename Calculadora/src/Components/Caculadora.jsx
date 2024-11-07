import React, { useState } from 'react';
import { CalculadoraStyle } from './Calculadora.Style';

const Calculadora = () => {
  const [input, setInput] = useState('');  // Variável para armazenar a expressão
  const [result, setResult] = useState(0);  // Variável para armazenar o resultado

  const handleClick = (value) => {
    setInput(input + value);  // Atualiza o input com o valor clicado
  };

  const calculate = () => {
    try {
      const calcResult = eval(input);  // Avalia a expressão
      setResult(calcResult);  // Atualiza o resultado
      setInput(calcResult.toString());  // Exibe o resultado na input
    } catch (error) {
      alert('Erro de cálculo');
      setInput('');  // Limpa o input em caso de erro
    }
  };

  const clearInput = () => {
    setInput('');  // Limpa o input
    setResult(0);  // Reseta o resultado
  };

  return (
    <CalculadoraStyle>
      <h1>Calculadora Catimba</h1>
      <div className="zona">
        <input type="text" className='txt' value={input} readOnly />  
        <div className='btn'>
          <div className="number">
            <div className="first">
              <button className="item" onClick={() => handleClick('1')}>1</button>
              <button className="item" onClick={() => handleClick('2')}>2</button>
              <button className="item" onClick={() => handleClick('3')}>3</button>
            </div>
            <div className="second">
              <button className="item" onClick={() => handleClick('4')}>4</button>
              <button className="item" onClick={() => handleClick('5')}>5</button>
              <button className="item" onClick={() => handleClick('6')}>6</button>
            </div>
            <div className="terceiro">
              <button className="item" onClick={() => handleClick('7')}>7</button>
              <button className="item" onClick={() => handleClick('8')}>8</button>
              <button className="item" onClick={() => handleClick('9')}>9</button>
            </div>
            <div className="last">
              <button className="item" onClick={clearInput}>C</button>
              <button className="item" onClick={() => handleClick('0')}>0</button>
              <button className="item" onClick={calculate}>=</button>
            </div>
          </div>
          <div className="sinal">
            <button className="item" onClick={() => handleClick('+')}>+</button>
            <button className="item" onClick={() => handleClick('-')}>-</button>
            <button className="item" onClick={() => handleClick('*')}>*</button>
            <button className="item" onClick={() => handleClick('/')}>/</button>
          </div>
        </div>
      </div>
    </CalculadoraStyle>
  );
};

export default Calculadora;
