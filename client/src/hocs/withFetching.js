import React, { useState, useEffect } from 'react';

export default (Component, propName) => ({ url, ...props }) => {
  const [data, setData] = useState(null);
  async function fetchUrl(url) {
    try {
      const data = await fetch(url);
      const result = await data.json();
      setData(result.results[0]);
    } catch (e) {
      console.error(e);
      return e;
    }
  }
  useEffect(
    () => {
      fetchUrl(url);
    },
    [url]
  );
  const someProps = { [propName]: data };
  return data ? <Component {...props} {...someProps} /> : <div>Loading...</div>;
};
