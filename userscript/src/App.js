import React, { useState, useEffect, useRef } from 'react';
import { awaitElement } from './utils';
import { placeOrder } from './utils/index';
import './App.css';

import Button from './components/Button';

const App = () => {
  const [sl, setSl] = useState('');
  const [currency, setCurrency] = useState('');
  const [reward, setReward] = useState('1.5');

  const setCurrencyRef = async () => {
    const currencyButton = await awaitElement('[aria-label = "Symbol Search"]');
    const currencyText = currencyButton.children[1].textContent;
    setCurrency(currencyText);
  };

  useEffect(() => {
    setCurrencyRef();
  }, []);

  return (
    <div className='blackBox' onMouseEnter={() => setCurrencyRef()}>
      <p className='currencyText'>{currency || 'NA'}</p>
      <div className='rewardOptions'>
        <div>
          <input
            type='radio'
            id='onefive'
            name='onefive'
            value='1.5'
            checked={reward === '1.5'}
            onChange={() => setReward('1.5')}
          />
          <label htmlFor='onefive'>1.5</label>
        </div>
        <div>
          <input
            type='radio'
            id='two'
            name='two'
            value='2'
            checked={reward === '2'}
            onChange={() => setReward('2')}
          />
          <label htmlFor='two'>2</label>
        </div>
        <div>
          <input
            type='radio'
            id='twoFive'
            name='twoFive'
            value='2.5'
            checked={reward === '2.5'}
            onChange={() => setReward('2.5')}
          />
          <label htmlFor='twoFive'>2.5</label>
        </div>
        <div>
          <input
            type='radio'
            id='three'
            name='three'
            value='3'
            checked={reward === '3'}
            onChange={() => setReward('3')}
          />
          <label htmlFor='three'>3</label>
        </div>
      </div>
      <div className='slTextRow'>
        <p>
          <span>SL</span>
          <input value={sl} onChange={(e) => setSl(e.target.value)} />
        </p>
      </div>
      <div className='orderButtonGroup'>
        <Button onClick={() => placeOrder(currency, sl, reward)}>Submit</Button>
      </div>
    </div>
  );
};

export default App;
