import React from 'react';

function InputField({ type, name, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ marginBottom: '10px', padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
    />
  );
}

export default InputField;
