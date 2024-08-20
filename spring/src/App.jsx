import React, { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import "./App.css"
export default function ChartsOverviewDemo() {
  const [formData, setFormData] = useState([0, 0, 0, 0]);

  const handleInputChange = (index, value) => {
    const newData = [...formData];
    newData[index] = parseInt(value) || 0;
    setFormData(newData);
  };

  return (
    <>
      <h1>MY SPENDING TRACKER</h1>
      <form>
        <label>
          First Quarter:
          <input
            type="number"
            onChange={(e) => handleInputChange(0, e.target.value)}
          />
        </label>
        <br />
        <label>
          Second Quarter:
          <input
            type="number"
            onChange={(e) => handleInputChange(1, e.target.value)}
          />
        </label>
        <br />
        <label>
          Third Quarter:
          <input
            type="number"
            onChange={(e) => handleInputChange(2, e.target.value)}
          />
        </label>
        <br />
        <label>
          Fourth Quarter:
          <input
            type="number"
            onChange={(e) => handleInputChange(3, e.target.value)}
          />
        </label>
        <br />
      </form>
      <BarChart
        series={[{ data: formData }]}
        height={500}
        width={1000}
        xAxis={[
          {
            data: [
              'First Quarter of The Semester',
              'Second Quarter of The Semester',
              'Third Quarter of The Semester',
              'Fourth Quarter of The Semester',
            ],
            scaleType: 'band', // Setting the x-axis scale type to 'band'
          },
        ]}
        margin={{ top: 40, bottom: 30, left: 40, right: 10 }}
      />

    </>
  );
}
