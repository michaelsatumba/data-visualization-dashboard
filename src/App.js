import React, { useRef } from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import './index.css';
import ThemeToggle from './components/ThemeToggle';
import Chart from './components/PriceChart'; 
import { ChevronDownIcon } from '@heroicons/react/solid'; 
import TradingViewChart from './components/TradingViewChart';
import Comments from './components/Comments'; 

const AppContent = () => {
  const { theme } = useTheme(); // Extract the current theme from the context

    // Create refs for each section
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
  
    // Function to scroll to the next section
    const scrollToSection = (sectionRef) => {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <div className="snap-start flex flex-col items-center justify-center h-screen">
          <div className="flex-grow flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">Data Visualization Dashboard</h1>
            <ThemeToggle />
          </div>
          <ChevronDownIcon className="h-6 w-6 mt-4 animate-bounce cursor-pointer" onClick={() => scrollToSection(section2Ref)}/>
        </div>

        <div ref={section2Ref} className="snap-start flex flex-col items-center justify-center h-screen">
          <div className="w-full h-full p-4 flex-grow">
            <Chart theme={theme} className="w-full h-full" /> {/* Pass the current theme as a prop */}
          </div>
          <ChevronDownIcon className="h-6 w-6 mt-4 animate-bounce cursor-pointer" onClick={() => scrollToSection(section3Ref)}/>
        </div>
        
        <div ref={section3Ref} className="snap-start flex flex-col items-center justify-center h-screen">
          <div className="w-full h-full p-4 flex-grow">
            <TradingViewChart theme={theme}  />
          </div>
          <ChevronDownIcon className="h-6 w-6 animate-bounce cursor-pointer" onClick={() => scrollToSection(section4Ref)}/>
        </div>

        <div ref={section4Ref} className="snap-start h-screen flex items-center justify-center">
          <Comments />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;