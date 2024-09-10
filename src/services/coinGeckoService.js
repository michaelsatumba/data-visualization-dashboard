export const fetchSolanaHistoricalData = async (days = 30) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=${days}`);
  const data = await response.json();
  return data.prices.map(price => ({
    date: price[0], // Use timestamp directly
    price: price[1],
  }));
};

export const fetchSolanaVolumes = async (days = 30) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=${days}`);
    const data = await response.json();
    return data.total_volumes.map(volume => ({
      date: volume[0], // Use timestamp directly
      volume: volume[1],
    }));
  };