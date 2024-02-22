"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsChart() {

  const data = {
    labels: ['Cabbage', 'Watermelon', 'Brocolli', 'Corn'],
    datasets: [
      {
        label: '# of Votes',
        data: [50, 10, 20, 20,],
        backgroundColor: [
          'rgba(0, 0, 255, 0.7)',
          'rgba(255, 0, 221, 0.7)',
          'rgba(2, 139, 71, 0.7)',
          'rgba(251,236,93)',
        ],
        borderColor: [
          'rgba(255, 255, 255, 255)',
          'rgba(255, 255, 255, 255)',
          'rgba(255, 255, 255, 255)',
          'rgba(255, 255, 255, 255)',
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Best Selling Products</h2>
      <div className="p-8">
        <Pie data={data} />
      </div>
    </div>
  )
}