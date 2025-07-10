import React from 'react';
import { ExpenseList } from '../components/expenses/ExpenseList';
import { Expense } from '../types/expense';

interface ExpensesProps {
  expenses: Expense[];
  onDeleteExpense: (id: string) => void;
}

export const Expenses: React.FC<ExpensesProps> = ({ expenses, onDeleteExpense }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">All Expenses</h2>
          <p className="text-gray-600">
            {expenses.length} {expenses.length === 1 ? 'expense' : 'expenses'} total
          </p>
        </div>
      </div>

      {/* Expenses List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <ExpenseList 
          expenses={expenses} 
          onDeleteExpense={onDeleteExpense}
          showAll={true}
        />
      </div>
    </div>
  );
};