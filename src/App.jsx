import React, { useState } from "react";
import Card from "./Card";
import Form from "./Form";

function App() {
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (formData) => {
    if (formData) {
      setUserData(formData);
    } else {
      setUserData(null);
    }
  };

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <Form onSubmit={handleFormSubmit} setError={setError} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData && <Card name={userData.input1} color={userData.input2} />}
    </div>
  );
}

export default App;
