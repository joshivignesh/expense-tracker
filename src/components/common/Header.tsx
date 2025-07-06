import React from 'react';
import { Plus } from 'lucide-react';

interface HeaderProps {
  onAddExpense: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onAddExpense }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">ExpenseTracker</h1>
            <p className="text-gray-600">Manage your finances with ease</p>
          </div>
          <button
            onClick={onAddExpense}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Expense
          </button>
        </div>
      </div>
    </header>
  );
};