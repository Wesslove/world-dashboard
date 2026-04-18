function CountryCard({ name, region, population, flag }) {
  return (
    <article className="country-card">
      
      {/* Le drapeau DOIT être dans une balise <img> */}
      <img
        src={flag}
        alt={`Flag of ${name}`}
        className="flag"
        loading="lazy"
      />

      <div className="country-content">
        <h3>{name}</h3>

        <span className="badge">{region}</span>

        <p className="population">
          👥 {population.toLocaleString()} habitants
        </p>
      </div>
    </article>
  );
}

export default CountryCard;