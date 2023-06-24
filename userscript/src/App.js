import React, { useState, useEffect } from 'react';
import { awaitElement } from './utils';
import { placeOrder } from './utils/index';
import './App.css';

import Button from './components/Button';

const App = () => {
  const [sl, setSl] = useState('');
  const [currency, setCurrency] = useState({});
  const [reward, setReward] = useState('1.5');

  const getCurrency = async () => {
    const currencyButton = await awaitElement('[aria-label = "Symbol Search"]');
    const currencyText = currencyButton.children[1].textContent + '+';
    setCurrency(currencyText);
    console.log(currencyText);
  };

  useEffect(() => {
    getCurrency();
  }, []);

  return (
    <div className='blackBox'>
      <p className='currencyText'>{currency.symbol}</p>
      <div className='slTextRow'>
        <p>
          <span>SL</span>
          <input value={sl} onChange={(e) => setSl(e.target.value)} />
        </p>
      </div>
      <div className='orderButtonGroup'>
        <Button onClick={() => placeOrder(currency, sl, reward)}>Buy</Button>
      </div>
    </div>
  );
};

export default App;
