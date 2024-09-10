import React, { useEffect, useState } from 'react';
import { fetchSolanaHistoricalData } from '../services/coinGeckoService';

const Metrics = () => {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchSolanaHistoricalData();
        console.log('Fetched data:', data); // Debugging: Log the fetched data

        setMetrics({
          volume: data.total_volumes[data.total_volumes.length - 1][1],
          marketCap: data.market_caps[data.market_caps.length - 1][1],
          circulatingSupply: data.prices.length, // Example: Adjust based on actual data
        });
      } catch (error) {
        console.error('Error fetching Solana data:', error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h2>24h Trading Volume: ${metrics.volume}</h2>
      <h2>Market Cap: ${metrics.marketCap}</h2>
      <h2>Circulating Supply: {metrics.circulatingSupply}</h2>
    </div>
  );
};

export default Metrics;