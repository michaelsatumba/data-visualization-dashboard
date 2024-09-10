// src/services/coinGeckoService.js
import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3/coins/solana/market_chart';

export const fetchSolanaHistoricalData = async (timeRange) => {
  try {
    const response = await axios.get(`${API_URL}?vs_currency=usd&days=${timeRange}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Solana historical data:', error);
    throw error;
  }
};