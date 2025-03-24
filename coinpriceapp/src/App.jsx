import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [ loading, setLoading ] = useState(true)
  const [ coins, setCoins ] = useState([]);

  // setLoading(false);를 적용하게 되는 시점이 언제인가?
  // 1.
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then(response => response.json())  // 2.

    // .then(json => console.log(json));
    .then(json => { // 3.
      setCoins(json);
      setLoading(false);
    });
  }, []);
  console.log(coins);

  return (
    <div>
      <h1>Coin Price Traker</h1>
      {loading ? <strong>Loading...</strong> : null}
    </div>
  );
}

export default App
