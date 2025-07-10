import React from 'react';
import { Trash2 } from 'lucide-react';
import { Expense } from '../../types/expense';
import { formatCurrency, getCategoryIcon, getCategoryColor } from '../../utils/calculations';
import { format } from 'date-fns';

interface ExpenseListProps {
  expenses: Expense[];
  onDeleteExpense: (id: string) => void;
  showAll?: boolean;
}

export const ExpenseList: React.FC<ExpenseListProps> = ({ 
  expenses, 
  onDeleteExpense, 
  showAll = false 
}) => {
  const displayExpenses = showAll ? expenses : expenses.slice(0, 5);

  if (expenses.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">💸</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No expenses yet</h3>
        <p className="text-gray-500">Start tracking your expenses by adding your first one!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {displayExpenses.map((expense) => (
        <div
          key={expense.id}
          className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">
                {getCategoryIcon(expense.category)}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-medium text-gray-900">{expense.description}</h3>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(expense.category)}`}>
                    {expense.category}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  {format(new Date(expense.date), 'MMM dd, yyyy')}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-lg font-semibold text-gray-900">
                {formatCurrency(expense.amount)}
              </span>
              <button
                onClick={() => onDeleteExpense(expense.id)}
                className="text-gray-400 hover:text-red-600 transition-colors p-1"
                title="Delete expense"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {!showAll && expenses.length > 5 && (
        <div className="text-center py-4">
          <p className="text-sm text-gray-500">
            Showing {displayExpenses.length} of {expenses.length} expenses
          </p>
        </div>
      )}
    </div>
  );
};