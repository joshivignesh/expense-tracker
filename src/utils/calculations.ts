import { Expense, ExpenseStats, ExpenseCategory } from '../types/expense';
import { format, startOfMonth, endOfMonth, eachMonthOfInterval, subMonths } from 'date-fns';

export const calculateExpenseStats = (expenses: Expense[]): ExpenseStats => {
  const totalExpenses = expenses.length;
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const averageExpense = totalExpenses > 0 ? totalAmount / totalExpenses : 0;

  // Category breakdown
  const categoryBreakdown: Record<ExpenseCategory, number> = {
    food: 0,
    transportation: 0,
    entertainment: 0,
    shopping: 0,
    utilities: 0,
    healthcare: 0,
    education: 0,
    other: 0,
  };

  expenses.forEach(expense => {
    categoryBreakdown[expense.category] += expense.amount;
  });

  // Monthly trend for the last 6 months
  const now = new Date();
  const sixMonthsAgo = subMonths(now, 5);
  const months = eachMonthOfInterval({
    start: startOfMonth(sixMonthsAgo),
    end: endOfMonth(now),
  });

  const monthlyTrend = months.map(month => {
    const monthStart = startOfMonth(month);
    const monthEnd = endOfMonth(month);
    
    const monthExpenses = expenses.filter(expense => {
      const expenseDate = new Date(expense.date);
      return expenseDate >= monthStart && expenseDate <= monthEnd;
    });

    const monthAmount = monthExpenses.reduce((sum, expense) => sum + expense.amount, 0);

    return {
      month: format(month, 'MMM yyyy'),
      amount: monthAmount,
    };
  });

  return {
    totalExpenses,
    totalAmount,
    averageExpense,
    categoryBreakdown,
    monthlyTrend,
  };
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const getCategoryIcon = (category: ExpenseCategory): string => {
  const icons: Record<ExpenseCategory, string> = {
    food: '🍽️',
    transportation: '🚗',
    entertainment: '🎬',
    shopping: '🛍️',
    utilities: '⚡',
    healthcare: '🏥',
    education: '📚',
    other: '📦',
  };
  return icons[category];
};

export const getCategoryColor = (category: ExpenseCategory): string => {
  const colors: Record<ExpenseCategory, string> = {
    food: 'bg-orange-100 text-orange-800',
    transportation: 'bg-blue-100 text-blue-800',
    entertainment: 'bg-purple-100 text-purple-800',
    shopping: 'bg-pink-100 text-pink-800',
    utilities: 'bg-yellow-100 text-yellow-800',
    healthcare: 'bg-red-100 text-red-800',
    education: 'bg-green-100 text-green-800',
    other: 'bg-gray-100 text-gray-800',
  };
  return colors[category];
};