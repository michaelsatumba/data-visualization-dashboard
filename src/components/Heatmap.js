import React, { useEffect, useState } from 'react';
import { fetchSolanaHistoricalData } from '../services/coinGeckoService';

const Heatmap = () => {
  const [heatmapData, setHeatmapData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchSolanaHistoricalData();
        console.log('Fetched data:', data); // Debugging: Log the fetched data

        setHeatmapData(data.total_volumes); // Example: Adjust based on actual data
      } catch (error) {
        console.error('Error fetching Solana data:', error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      {/* Implement heatmap visualization here */}
      <h2>Heatmap</h2>
    </div>
  );
};

export default Heatmap;