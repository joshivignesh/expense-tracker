import React, { useState } from 'react';
import { Layout } from './components/common/Layout';
import { Header } from './components/common/Header';
import { Dashboard } from './pages/Dashboard';
import { Expenses } from './pages/Expenses';
import { Modal } from './components/ui/Modal';
import { ExpenseForm } from './components/expenses/ExpenseForm';
import { useExpenses } from './hooks/useExpenses';
import { calculateExpenseStats } from './utils/calculations';
import { Expense } from './types/expense';

function App() {
  const { expenses, loading, addExpense, deleteExpense } = useExpenses();
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'expenses'>('dashboard');
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);

  const stats = calculateExpenseStats(expenses);

  const handleAddExpense = (expense: Omit<Expense, 'id'>) => {
    addExpense(expense);
    setShowAddExpenseModal(false);
  };

  const handleDeleteExpense = (id: string) => {
    deleteExpense(id);
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header onAddExpense={() => setShowAddExpenseModal(true)} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'dashboard'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setCurrentPage('expenses')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'expenses'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Expenses
            </button>
          </div>
        </nav>

        {/* Page Content */}
        {currentPage === 'dashboard' && (
          <Dashboard
            expenses={expenses}
            stats={stats}
            onDeleteExpense={handleDeleteExpense}
          />
        )}
        
        {currentPage === 'expenses' && (
          <Expenses
            expenses={expenses}
            onDeleteExpense={handleDeleteExpense}
          />
        )}
      </main>

      {/* Add Expense Modal */}
      <Modal
        isOpen={showAddExpenseModal}
        onClose={() => setShowAddExpenseModal(false)}
        title="Add New Expense"
      >
        <ExpenseForm
          onSubmit={handleAddExpense}
          onCancel={() => setShowAddExpenseModal(false)}
        />
      </Modal>
    </Layout>
  );
}

export default App;