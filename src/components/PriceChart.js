import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { fetchSolanaHistoricalData } from '../services/coinGeckoService';

// Register Chart.js components
Chart.register(...registerables);

const PriceChart = ({ timeRange }) => {
  const [chartData, setChartData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchSolanaHistoricalData();
        console.log('Fetched data:', data); // Debugging: Log the fetched data

        // Extract prices and timestamps from the historical data
        const prices = data.prices.map(price => price[1]);
        const labels = data.prices.map(price => new Date(price[0]).toLocaleDateString());

        setChartData({
          labels,
          datasets: [
            {
              label: 'Solana Price',
              data: prices,
              borderColor: 'rgba(75,192,192,1)',
              fill: false,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching Solana data:', error);
      }
    };

    getData();
  }, [timeRange]);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (chartData) {
      const ctx = document.getElementById('priceChart').getContext('2d');
      chartRef.current = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
          scales: {
            x: {
              type: 'category',
              labels: chartData.labels,
            },
          },
        },
      });
    }
  }, [chartData]);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return <canvas id="priceChart"></canvas>;
};

export default PriceChart;