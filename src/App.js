import { ThemeProvider, useTheme } from './ThemeContext';
import './index.css';
import ThemeToggle from './components/ThemeToggle';
import Chart from './components/PriceChart'; 
import Heatmap from './components/Heatmap';


const AppContent = () => {
  const { theme } = useTheme(); // Extract the current theme from the context

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Data Visualization Dashboard</h1>
        <ThemeToggle />
        <Chart theme={theme} /> {/* Pass the current theme as a prop */}
        <Heatmap />
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