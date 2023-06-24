import { config } from '../config';

const placeOrder = (symbol, stopLoss, reward, risk) => {
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
      risk: parseFloat(risk),
    }),
  };
  return fetch(webhookUrl, postRequestOptions);
};

export { placeOrder };
