//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import React from 'react';

function Card({ name, color }) {
  const validColor = isValidHexColor(color) ? color : null;

  return (
    <div style={{ border: '1px solid #585858', padding: '20px', marginTop: '20px', borderRadius: '4px' }}>
      <h2>Hola {name}!</h2>
      <p>Sabemos que tu color favorito es:</p>
      <div
        style={{
          backgroundColor: validColor || 'transparent',
          color: (validColor) ? '#cf4854' :'#000',
          padding: '10px',
          borderRadius: '4px',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        {color}
      </div>
    </div>
  );
}

function isValidHexColor(color) {
  return /^#([0-9A-F]{3}){1,2}$/i.test(color);
}


export default Card;
