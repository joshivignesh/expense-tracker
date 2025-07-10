import { useState, useEffect } from 'react';
import { Expense } from '../types/expense';

const STORAGE_KEY = 'expense-tracker-expenses';

export const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  // Load expenses from localStorage on mount
  useEffect(() => {
    try {
      const storedExpenses = localStorage.getItem(STORAGE_KEY);
      if (storedExpenses) {
        const parsedExpenses = JSON.parse(storedExpenses).map((expense: any) => ({
          ...expense,
          date: new Date(expense.date),
        }));
        setExpenses(parsedExpenses);
      }
    } catch (error) {
      console.error('Error loading expenses from localStorage:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Save expenses to localStorage whenever expenses change
  useEffect(() => {
    if (!loading) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
      } catch (error) {
        console.error('Error saving expenses to localStorage:', error);
      }
    }
  }, [expenses, loading]);

  const addExpense = (expenseData: Omit<Expense, 'id'>) => {
    const newExpense: Expense = {
      ...expenseData,
      id: crypto.randomUUID(),
    };
    setExpenses(prev => [newExpense, ...prev]);
  };

  const deleteExpense = (id: string) => {
    setExpenses(prev => prev.filter(expense => expense.id !== id));
  };

  const updateExpense = (id: string, updates: Partial<Omit<Expense, 'id'>>) => {
    setExpenses(prev =>
      prev.map(expense =>
        expense.id === id ? { ...expense, ...updates } : expense
      )
    );
  };

  const getExpensesByCategory = (category: string) => {
    return expenses.filter(expense => expense.category === category);
  };

  const getExpensesByDateRange = (startDate: Date, endDate: Date) => {
    return expenses.filter(expense => {
      const expenseDate = new Date(expense.date);
      return expenseDate >= startDate && expenseDate <= endDate;
    });
  };

  return {
    expenses,
    loading,
    addExpense,
    deleteExpense,
    updateExpense,
    getExpensesByCategory,
    getExpensesByDateRange,
  };
};