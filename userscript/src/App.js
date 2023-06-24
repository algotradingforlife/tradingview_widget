import React, { useState, useEffect } from 'react';
import { awaitElement } from './utils';
import { placeOrder } from './utils/index';
import './App.css';

import Button from './components/Button';

const App = () => {
  const [sl, setSl] = useState('');
  const [currency, setCurrency] = useState('');
  const [risk, setRisk] = useState('0.5');
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
      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <p className='currencyText'>{currency || 'NA'}</p>
        <div style={{ display: 'flex', color: 'white' }}>
          <span style={{ marginRight: '20px' }}>Risk: </span>
          <div style={{ marginRight: '25px' }}>
            <input
              type='radio'
              id='zeroFiveRisk'
              name='zeroFiveRisk'
              value='0.5'
              checked={risk === '0.5'}
              onChange={() => setRisk('0.5')}
              style={{ marginRight: '10px' }}
            />
            <label htmlFor='zeroFiveRisk'>0.5</label>
          </div>
          <div>
            <input
              type='radio'
              id='oneRisk'
              name='oneRisk'
              value='1'
              checked={risk === '1'}
              onChange={() => setRisk('1')}
              style={{ marginRight: '10px' }}
            />
            <label htmlFor='oneRisk'>1</label>
          </div>
        </div>
      </div>
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
        <Button
          onClick={() => {
            placeOrder(currency, sl, reward, risk);
            setSl('');
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default App;
