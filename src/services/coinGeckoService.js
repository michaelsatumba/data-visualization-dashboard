import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3/coins/solana/market_chart';
const DAYS = '30'; // Example: fetch data for the last 30 days

export const fetchSolanaHistoricalData = async () => {
  try {
    const response = await axios.get(`${API_URL}?vs_currency=usd&days=${DAYS}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Solana historical data:', error);
    throw error;
  }
};