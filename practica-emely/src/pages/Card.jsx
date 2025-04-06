import React from 'react';
import pic1 from '../components/pic1.jpeg';

const Card = ({ name = "Emely", role = "Futura Desarrolladora Web" }) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
    <div className="flex justify-center mt-10">
      <div className="bg-white shadow-xl rounded-lg p-6 w-80 text-center">
        <img
          src= {pic1}
          alt="Foto de perfil"
          className="rounded-full w-24 h-24 mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Card;
