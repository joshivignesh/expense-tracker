import React from 'react';
import { StatsCards } from '../components/dashboard/StatsCards';
import { ExpenseChart } from '../components/dashboard/ExpenseChart';
import { ExpenseList } from '../components/expenses/ExpenseList';
import { Expense, ExpenseStats } from '../types/expense';

interface DashboardProps {
  expenses: Expense[];
  stats: ExpenseStats;
  onDeleteExpense: (id: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ expenses, stats, onDeleteExpense }) => {
  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <StatsCards stats={stats} />

      {/* Charts */}
      <ExpenseChart stats={stats} />

      {/* Recent Expenses */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Recent Expenses</h2>
          {expenses.length > 5 && (
            <span className="text-sm text-gray-500">
              Showing latest 5 expenses
            </span>
          )}
        </div>
        <ExpenseList 
          expenses={expenses} 
          onDeleteExpense={onDeleteExpense}
          showAll={false}
        />
      </div>
    </div>
  );
};