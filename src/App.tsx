import React from 'react';

function App() {
  const config = {
    language: "typescript",
  }

  const handleSubmit = () => {
    window.alert(`Submitted SDK configuration:\n\n${JSON.stringify(config)}`)
  }

  return (
    <div>
      <button onClick={handleSubmit}>
        Generate SDKs
      </button>
    </div>
  );
}

export default App;
