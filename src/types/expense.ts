export type ExpenseCategory = 
  | 'food'
  | 'transportation'
  | 'entertainment'
  | 'shopping'
  | 'utilities'
  | 'healthcare'
  | 'education'
  | 'other';

export interface Expense {
  id: string;
  amount: number;
  description: string;
  category: ExpenseCategory;
  date: Date;
}

export interface ExpenseStats {
  totalExpenses: number;
  totalAmount: number;
  averageExpense: number;
  categoryBreakdown: Record<ExpenseCategory, number>;
  monthlyTrend: Array<{
    month: string;
    amount: number;
  }>;
}