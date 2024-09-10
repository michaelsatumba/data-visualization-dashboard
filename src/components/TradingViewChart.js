import React, { useEffect, useState } from 'react';
import TradingViewWidget from 'react-tradingview-widget';
import { fetchSolanaHistoricalData, fetchSolanaVolumes } from '../services/coinGeckoService';

const TradingViewChart = ({ theme }) => {
  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prices = await fetchSolanaHistoricalData();
        const volumes = await fetchSolanaVolumes();
        console.log('Fetched prices:', prices); // Debugging: Log the fetched prices
        console.log('Fetched volumes:', volumes); // Debugging: Log the fetched volumes

        // Combine prices and volumes data if needed
        const combinedData = prices.map((price, index) => ({
          date: price.date,
          price: price.price,
          volume: volumes[index] ? volumes[index].volume : null,
        }));

        console.log('Combined data:', combinedData); // Debugging: Log the combined data
        setHistoricalData(combinedData);
      } catch (error) {
        console.error('Error fetching Solana data:', error);
        setHistoricalData([]);
      }
    };

    fetchData();
  }, []);

  return (
      <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Trading View</h2>
      <div className="w-[900px] h-[700px]">
        <TradingViewWidget
          symbol="SOLUSD"
          theme={theme}
          locale="en"
          autosize
        />
      </div>
    </div>
  );
};

export default TradingViewChart;