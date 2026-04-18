import { useState, useEffect } from "react";
import useCountries from "./useCountries";
import CountryCard from "./CountryCard";
import StatCard from "./StatCard";
import "./index.css";

function Dashboard() {
  const { countries, loading, error } = useCountries();
  const [region, setRegion] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  if (loading) return (
    <div className="loading">
      <div className="loading-spinner"></div>
      <p className="loading-text">Loading countries...</p>
    </div>
  );
  if (error) return <p>Error : {error}</p>;

  const totalCountries = countries.length;
  const totalPopulation = countries.reduce(
    (sum, c) => sum + (c.population || 0),
    0
  );
  const regionsCount = new Set(countries.map(c => c.region)).size;
  const largestCountry = countries.reduce((max, c) => 
    (c.population || 0) > (max.population || 0) ? c : max, countries[0] || {}
  );

  let filteredCountries = countries.filter(country => {
    const matchesRegion = region === "All" || country.region === region;
    const matchesSearch = country.name.common.toLowerCase().includes(search.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  // Tri
  filteredCountries.sort((a, b) => {
    let aValue, bValue;
    if (sortBy === "name") {
      aValue = a.name.common.toLowerCase();
      bValue = b.name.common.toLowerCase();
    } else if (sortBy === "population") {
      aValue = a.population || 0;
      bValue = b.population || 0;
    } else if (sortBy === "region") {
      aValue = a.region || "";
      bValue = b.region || "";
    }
    
    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const regions = ["All", ...new Set(countries.map(c => c.region).filter(Boolean))];

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      {/* Header */}
      <header className="header">
        <h1>🌍 World Dashboard</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      {/* Statistics */}
      <section className="stats">
        <StatCard label="Pays" value={totalCountries} />
        <StatCard label="Régions" value={regionsCount} />
        <StatCard
          label="Population Totale"
          value={totalPopulation.toLocaleString()}
        />
        <StatCard
          label="Plus Grand Pays"
          value={`${largestCountry.name?.common || "N/A"} (${(largestCountry.population || 0).toLocaleString()})`}
        />
      </section>

      {/* Filters */}
      <div className="filters">
        <div className="filter-group">
          <label>Région:</label>
          <select value={region} onChange={e => setRegion(e.target.value)}>
            {regions.map(reg => (
              <option key={reg} value={reg}>{reg}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-group">
          <label>Recherche:</label>
          <input
            type="text"
            placeholder="Nom du pays..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        
        <div className="filter-group">
          <label>Trier par:</label>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="name">Nom</option>
            <option value="population">Population</option>
            <option value="region">Région</option>
          </select>
          <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
            {sortOrder === "asc" ? "↑" : "↓"}
          </button>
        </div>
      </div>

      {/* Cards grid */}
      <section className="countries-grid">
        {filteredCountries.map(country => (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            region={country.region}
            population={country.population}
            flag={country.flags.png}
          />
        ))}
      </section>
    </div>
  );
}

export default Dashboard;