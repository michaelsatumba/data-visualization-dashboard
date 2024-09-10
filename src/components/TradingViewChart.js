import React, { useEffect } from 'react';

const TradingViewChart = ({ theme }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        container_id: 'tradingview_chart',
        autosize: true,
        symbol: 'SOLUSD',
        theme: theme === 'dark' ? 'Dark' : 'Light',
        locale: 'en',
      });
    };
    document.getElementById('tradingview_container').appendChild(script);
  }, [theme]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Trading View</h2>
      <div id="tradingview_container" className="w-[900px] h-[700px]">
        <div id="tradingview_chart" className="w-full h-full"></div>
      </div>
    </div>

    
  );
};

export default TradingViewChart;