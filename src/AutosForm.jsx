import React, { useState } from 'react';
import Card from './Card';

const AutosForm = () => {
  const [modelo, setModelo] = useState('');
  const [marca, setMarca] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (modelo.length < 3 || /^\s/.test(modelo) || marca.length < 6) {
      alert('Por favor chequea que la información sea correcta');
    } else {
      setShowCard(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="modelo">Modelo de Auto:</label>
        <input
          type="text"
          placeholder='Ingrese el Modelo del Auto'
          id="modelo"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          required
        />
        
        <label htmlFor="marca">Marca del Auto:</label>
        <input
          type="text"
          placeholder='Ingrese La Marca del Auto'
          id="marca"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          required/>
        
        <button type="submit">Enviar</button>
        
      </form>

      {showCard && (
        <Card modelo={modelo} marca={marca} />
      )}
    </div>
    
  );
};

export default AutosForm;