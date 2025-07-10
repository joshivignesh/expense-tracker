import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { ExpenseStats } from '../../types/expense';
import { formatCurrency } from '../../utils/calculations';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface ExpenseChartProps {
  stats: ExpenseStats;
}

export const ExpenseChart: React.FC<ExpenseChartProps> = ({ stats }) => {
  // Monthly trend chart data
  const monthlyData = {
    labels: stats.monthlyTrend.map(item => item.month),
    datasets: [
      {
        label: 'Monthly Expenses',
        data: stats.monthlyTrend.map(item => item.amount),
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const monthlyOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Spending Trend',
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${formatCurrency(context.parsed.y)}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return formatCurrency(value);
          },
        },
      },
    },
  };

  // Category breakdown chart data
  const categoryLabels = Object.keys(stats.categoryBreakdown).filter(
    category => stats.categoryBreakdown[category as keyof typeof stats.categoryBreakdown] > 0
  );
  
  const categoryData = {
    labels: categoryLabels.map(category => 
      category.charAt(0).toUpperCase() + category.slice(1)
    ),
    datasets: [
      {
        data: categoryLabels.map(category => 
          stats.categoryBreakdown[category as keyof typeof stats.categoryBreakdown]
        ),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#FF6384',
          '#C9CBCF',
        ],
        borderWidth: 2,
        borderColor: '#fff',
      },
    ],
  };

  const categoryOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Expenses by Category',
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = ((context.parsed / total) * 100).toFixed(1);
            return `${context.label}: ${formatCurrency(context.parsed)} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Monthly Trend Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <Bar data={monthlyData} options={monthlyOptions} />
      </div>

      {/* Category Breakdown Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        {categoryLabels.length > 0 ? (
          <Doughnut data={categoryData} options={categoryOptions} />
        ) : (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="text-gray-400 text-4xl mb-2">📊</div>
              <p className="text-gray-500">No expense data to display</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};