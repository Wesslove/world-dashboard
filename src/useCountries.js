import { useEffect, useState } from "react";

function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,region,population,flags")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erreur API");
        }
        return res.json();
      })
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { countries, loading, error };
}

export default useCountries;