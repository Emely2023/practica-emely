import React, { useState } from 'react';

const Calculadora = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(null);

  const calcular = (operacion) => {
    let res;
    switch (operacion) {
      case '+':
        res = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        res = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        res = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        res = parseFloat(num2) !== 0 ? parseFloat(num1) / parseFloat(num2) : "Error: División por cero";
        break;
      default:
        res = null;
    }
    setResultado(res);
  };

  const limpiar = () => {
    setNum1(0);
    setNum2(0);
    setResultado(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Calculadora</h2>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="border p-2 rounded m-2 w-32"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="border p-2 rounded m-2 w-32"
        />
        <div className="space-x-2 mt-4">
          <button onClick={() => calcular('+')} className="bg-blue-500 text-white px-4 py-2 rounded">+</button>
          <button onClick={() => calcular('-')} className="bg-green-500 text-white px-4 py-2 rounded">-</button>
          <button onClick={() => calcular('*')} className="bg-purple-500 text-white px-4 py-2 rounded">*</button>
          <button onClick={() => calcular('/')} className="bg-red-500 text-white px-4 py-2 rounded">/</button>
          <button onClick={limpiar} className="bg-gray-500 text-white px-4 py-2 rounded">Limpiar</button>
        </div>
        {resultado !== null && (
          <p className="mt-4 text-xl font-semibold">Resultado: {resultado}</p>
        )}
      </div>
    </div>
  );
};

export default Calculadora;
