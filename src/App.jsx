import { useEffect, useState, useMemo } from 'react'
import './App.css'

// Componente principale dell'applicazione
function App() {
  const [politicians, setPoliticians] = useState([]);
  const [search, setSearch] = useState("");

  // Recupera i dati dei politici al caricamento del componente
  useEffect(() => {
    fetch("http://localhost:3333/politicians")
      .then((res) => res.json())
      .then((data) => setPoliticians(data))
      .catch((err) => console.error(err));
  }, []);

  // Filtra i politici in base alla ricerca
  const filteredPoliticians = useMemo(() => {
    return politicians.filter((politician) => {
      const searchLower = search.toLowerCase();

      // Controlla se il nome o la biografia del politico contiene la stringa di ricerca
      return (
        politician.name.toLowerCase().includes(searchLower) ||
        politician.biography.toLowerCase().includes(searchLower)
      );
    });
  }, [politicians, search]);

  // Visualizza la lista dei politici
  return (
    <div>
      <h1>Lista dei politici</h1>

      {/* Campo di ricerca per filtrare i politici */}
      <input
        type="text"
        placeholder="Cerca un politico..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Visualizza i politici filtrati */}
      <div>
        {filteredPoliticians.map((politician) => (
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
