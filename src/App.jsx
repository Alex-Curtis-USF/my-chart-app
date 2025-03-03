import { useState } from 'react';
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './App.css';
import BarChart from './Components/BarChart.js';


function App() {

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('/fin_data.json')
      .then((response) => response.json())
      .then((data) => setChartData(data));
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }


  return (
    <div style={{ textAlign: 'center' }}>
    <h1>Dynamic Charts with React and Chart.js</h1>
    <BarChart data={chartData} />
    <LineChart data={chartData} />
    <ScatterChart data={chartData} />
    <BubbleChart data={chartData} />
  </div>
  )
}

export default App
