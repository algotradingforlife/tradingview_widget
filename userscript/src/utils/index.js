import { config } from '../config';

const placeOrder = (symbol, stopLoss, reward) => {
  const webhookUrl = config.webhookUrl;
  const postRequestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      symbol: symbol,
      stopLoss: parseFloat(stopLoss),
      reward: parseFloat(reward),
    }),
  };
  return fetch(webhookUrl, postRequestOptions);
};

export { placeOrder };
