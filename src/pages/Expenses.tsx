import React from 'react';

interface ExpensesProps {
  expenses: any[];
  onDeleteExpense: (id: string) => void;
}

export const Expenses: React.FC<ExpensesProps> = ({ expenses, onDeleteExpense }) => {
  return (
    <div>
      <h2>All Expenses</h2>
      {/* Expenses content will be implemented here */}
    </div>
  );
};