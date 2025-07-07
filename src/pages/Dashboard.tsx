import React from 'react';

interface DashboardProps {
  expenses: any[];
  stats: any;
  onDeleteExpense: (id: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ expenses, stats, onDeleteExpense }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      {/* Dashboard content will be implemented here */}
    </div>
  );
};