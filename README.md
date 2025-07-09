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