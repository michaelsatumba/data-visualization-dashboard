import React, { useState } from 'react';
import './App.css';
import PriceChart from './components/PriceChart';
import TimeRangeSelector from './components/TimeRangeSelector';
import Heatmap from './components/Heatmap';

function App() {
  const [timeRange, setTimeRange] = useState('24h');

  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Solana Data Visualization Dashboard</h1>
      </header>
      <main>
        <TimeRangeSelector onChange={handleTimeRangeChange} />
        <PriceChart timeRange={timeRange} />
        <Heatmap timeRange={timeRange} />
      </main>
    </div>
  );
}

export default App;