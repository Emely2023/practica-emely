import React, { useState } from 'react';

const ToDo = () => {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea) {
      setTareas([...tareas, tarea]);
      setTarea('');
    }
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
    <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="max-w-4xl mx-auto p-6">
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Lista de Tareas</h2>
      <input
      
        type="text"
        placeholder="Nueva tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        className="border p-2 rounded mr-2"
      />
      <button onClick={agregarTarea} className="bg-green-600 text-white px-4 py-2 rounded">
        Agregar
      </button>
      <ul className="mt-4 list-disc list-inside">
        {tareas.map((t, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{t}</span>
            <button
              onClick={() => eliminarTarea(index)}
              className="bg-red-500 text-white px-2 py-1 rounded ml-2"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
    </div>
  );
};

export default ToDo;
