# ExpenseTracker

A modern, responsive expense tracking application built with React, TypeScript, and Tailwind CSS. Track your expenses, visualize spending patterns, and manage your finances with ease.

## Features

- 📊 **Dashboard Overview** - Get insights into your spending with visual charts and statistics
- 💰 **Expense Management** - Add, view, and delete expenses with detailed categorization
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean, intuitive interface built with Tailwind CSS
- 📈 **Data Visualization** - Interactive charts powered by Chart.js
- 🔍 **Expense Filtering** - Filter and search through your expenses
- 💾 **Local Storage** - Your data persists between sessions

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Date Handling**: date-fns
- **Linting**: ESLint with TypeScript support

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd expense-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Common layout components
│   ├── expenses/       # Expense-related components
│   └── ui/            # Generic UI components
├── hooks/             # Custom React hooks
├── pages/             # Page components
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
└── main.tsx          # Application entry point
```

## Component Architecture

### Pages

#### `Dashboard.tsx`
The main dashboard page that provides an overview of expense data. Features:
- Displays summary statistics through StatsCards
- Shows visual data representation via ExpenseChart
- Lists recent expenses (latest 5) using ExpenseList
- Accepts expenses data, calculated stats, and delete handler as props

#### `Expenses.tsx`
A dedicated page for viewing all expenses with filtering capabilities. Features:
- Shows total expense count in the header
- Displays all expenses using ExpenseList component
- Provides a clean, organized view of expense history

### Common Components

#### `Layout.tsx`
A wrapper component that provides consistent styling across the application:
- Sets up the main container with proper background styling
- Ensures consistent layout structure throughout the app
- Uses Tailwind's `min-h-screen` and `bg-gray-50` for full-height light background

#### `Header.tsx`
The application header containing branding and primary actions:
- Displays the "ExpenseTracker" title and subtitle
- Contains the "Add Expense" button with Plus icon
- Uses responsive design with proper spacing and hover effects
- Triggers the expense form modal when the add button is clicked

### Dashboard Components

#### `StatsCards.tsx`
Displays key financial metrics in an attractive card layout:
- **Total Expenses**: Shows count of all recorded expenses
- **Total Amount**: Displays sum of all expense amounts
- **Average Expense**: Calculates and shows average expense value
- **This Month**: Shows current month's total spending
- Each card features an icon, colored background, and formatted values
- Responsive grid layout (1 column on mobile, 2 on tablet, 4 on desktop)

#### `ExpenseChart.tsx`
Provides visual data representation using Chart.js:
- **Monthly Trend Chart**: Bar chart showing spending over the last 6 months
- **Category Breakdown**: Doughnut chart displaying expense distribution by category
- Interactive tooltips with formatted currency values and percentages
- Responsive design with proper fallback for empty data states
- Uses Chart.js with react-chartjs-2 wrapper for React integration

### Expense Components

#### `ExpenseForm.tsx`
A comprehensive form for adding new expenses:
- **Amount Input**: Number input with dollar sign icon and validation
- **Description Field**: Text input for expense description
- **Category Selection**: Dropdown with predefined categories and emoji icons
- **Date Picker**: Date input defaulting to current date
- **Form Validation**: Real-time validation with error messages
- **Responsive Design**: Clean layout with proper spacing and focus states
- Categories include: Food, Transportation, Entertainment, Shopping, Utilities, Healthcare, Education, Other

#### `ExpenseList.tsx`
Displays expenses in a clean, organized list format:
- **Expense Cards**: Each expense shown in individual cards with hover effects
- **Category Icons**: Visual category representation with emoji icons
- **Formatted Display**: Currency formatting and date formatting using date-fns
- **Delete Functionality**: Trash icon for removing expenses
- **Empty State**: Friendly message when no expenses exist
- **Flexible Display**: Can show all expenses or limited count (recent 5)
- **Color-coded Categories**: Each category has distinct background colors

### UI Components

#### `Modal.tsx`
A reusable modal dialog component:
- **Overlay Background**: Semi-transparent backdrop that closes modal on click
- **Centered Content**: Properly centered modal panel with shadow
- **Header Section**: Title display with close button (X icon)
- **Flexible Content**: Accepts any React children as modal content
- **Accessibility**: Proper z-index layering and focus management
- **Responsive**: Works well on all screen sizes
- **Smooth Transitions**: CSS transitions for opening/closing animations

### Custom Hooks

#### `useExpenses.ts`
A custom hook that manages all expense-related state and operations:
- **Local Storage Integration**: Automatically saves/loads expenses from browser storage
- **CRUD Operations**: Add, delete, and update expense functionality
- **Data Persistence**: Ensures data survives browser refreshes
- **Loading States**: Manages loading state during initial data fetch
- **Utility Functions**: Provides filtering by category and date range
- **Error Handling**: Graceful error handling for storage operations
- **Type Safety**: Full TypeScript support with proper typing

### Utility Functions

#### `calculations.ts`
Contains helper functions for data processing and formatting:
- **calculateExpenseStats()**: Computes comprehensive statistics from expense data
- **formatCurrency()**: Formats numbers as currency using Intl.NumberFormat
- **getCategoryIcon()**: Returns appropriate emoji for each expense category
- **getCategoryColor()**: Provides Tailwind CSS classes for category styling
- **Monthly Trend Calculation**: Processes expenses into 6-month trend data
- **Category Breakdown**: Aggregates expenses by category for chart display

### Type Definitions

#### `expense.ts`
Defines TypeScript interfaces and types:
- **ExpenseCategory**: Union type for all supported expense categories
- **Expense**: Main expense object interface with id, amount, description, category, and date
- **ExpenseStats**: Interface for calculated statistics including totals, averages, and breakdowns
- **Type Safety**: Ensures consistent data structure throughout the application

## Component Data Flow

1. **App.tsx** serves as the main coordinator, managing global state through `useExpenses` hook
2. **Navigation** switches between Dashboard and Expenses pages
3. **Header** triggers modal opening for expense creation
4. **Modal** wraps the ExpenseForm for adding new expenses
5. **Dashboard** receives expenses and calculated stats, displaying them through various child components
6. **ExpenseList** handles expense display and deletion across both pages
7. **Charts and Stats** provide visual representation of the expense data
8. **Local Storage** persists all data automatically through the custom hook

## Usage

### Adding Expenses

1. Click the "Add Expense" button in the header
2. Fill in the expense details:
   - Amount
   - Description
   - Category
   - Date
3. Click "Save" to add the expense

### Viewing Expenses

- **Dashboard**: View summary statistics and recent expenses
- **All Expenses**: Browse through all your expenses with filtering options

### Managing Expenses

- Delete expenses by clicking the delete button on any expense item
- Filter expenses by category, date range, or search terms

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.