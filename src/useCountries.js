import { useEffect, useState } from "react";

function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,region,population,flags")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erreur API: " + res.status);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Countries loaded:", data.length);
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { countries, loading, error };
}

export default useCountries;