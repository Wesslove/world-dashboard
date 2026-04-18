function CountryItem({ name, region }) {
  return (
    <li className="country">
      <span className="country-name">{name}</span>
      <span className="badge">{region}</span>
    </li>
  );
}

export default CountryItem;