import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setDate] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setDate(res[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
