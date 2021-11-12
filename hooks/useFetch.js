import { useState } from "react";

const DEFAULT_OPTIONS = {};

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState(undefined);

  function makeFetch(url, options = DEFAULT_OPTIONS) {
    setLoading(true);
    setError(undefined);
    setData(undefined);
    fetch(url, options)
      .then((res) => {
        if (res.ok) setData(res.json());
        else setError(res.json());
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }

  return [loading, error, data, makeFetch];
};

export default useFetch;
