import { useEffect, useState } from 'react'
import './App.css'

// Componente principale dell'applicazione
function App() {
  const [politicians, setPoliticians] = useState([]);

  // Recupera i dati dei politici al caricamento del componente
  useEffect(() => {
    fetch("http://localhost:3333/politicians")
      .then((res) => res.json())
      .then((data) => setPoliticians(data))
      .catch((err) => console.error(err));
  }, []);

  // Visualizza la lista dei politici
  return (
    <div>
      <h1>Lista dei politici</h1>

      <div>
        {politicians.map((politician) => (
          <div key={politician.id}>
            <img
              src={politician.image}
              alt={politician.name}
              width="200"
            />

            <h2>{politician.name}</h2>

            <h4>{politician.position}</h4>

            <p>{politician.biography}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
