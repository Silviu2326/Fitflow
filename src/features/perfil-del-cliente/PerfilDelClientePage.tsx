import React from 'react';
import { useParams } from 'react-router-dom';

const PerfilDelClientePage = () => {
  const { clientId } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">
        Perfil del Cliente
      </h1>
      <p className="text-gray-600">
        Cliente ID: {clientId} - Boilerplate
      </p>
    </div>
  );
};

export default PerfilDelClientePage;