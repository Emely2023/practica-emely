import React, { useState } from 'react';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [estudiantes, setEstudiantes] = useState([]);

  const registrar = () => {
    if (nombre && edad) {
      setEstudiantes([...estudiantes, { nombre, edad }]);
      setNombre('');
      setEdad('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="max-w-4xl mx-auto p-6">
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Registro de Estudiantes</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="border p-2 rounded m-2"
      />
      <input
        type="number"
        placeholder="Edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        className="border p-2 rounded m-2"
      />
      <button onClick={registrar} className="bg-blue-600 text-white px-4 py-2 rounded">
        Registrar
      </button>

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Listado de Estudiantes</h3>
        <ul className="list-disc list-inside">
          {estudiantes.map((est, index) => (
            <li key={index}>{est.nombre} - {est.edad} años</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Registro;
