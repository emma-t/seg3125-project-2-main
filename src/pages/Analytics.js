import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function Analytics() {
  // Generating pseudo data for the chart
  const generatePseudoData = () => {
    const data = [];
    const startDate = new Date();
  
    for (let i = 0; i < 30; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() - i);
  
      data.push({
        date: date.toLocaleDateString(),
        donations: Math.floor(Math.random() * 20) + 10,
        treesSaved: Math.floor(Math.random() * 5) + 1,
        carbonReduced: Math.floor(Math.random() * 100) + 50,
      });
    }
  
    return data.reverse();
  };
  
  const chartData = generatePseudoData();

  return (
    <div>
      <div className="analytics">
        <h1 style={{ textAlign: "center" }}>Donations Analytics</h1>
      </div>
      <div className="chart-container">
        <LineChart width={window.innerWidth-50} height={400} data={chartData}>
        <XAxis dataKey="date" stroke="white" />
          <YAxis stroke="white" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="carbonReduced" name="Carbon Reduced (tons)" stroke="#ffc658" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="donations" name="Number of Donations" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="treesSaved" name="Trees Saved" stroke="#82ca9d" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    </div>
  );
}

export default Analytics;
