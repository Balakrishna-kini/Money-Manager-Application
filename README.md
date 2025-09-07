# Money Manager Application

## What is Money Manager?

Money Manager is a simple application that helps you track your personal finances. You can record your income and expenses, organize them into categories, and see your financial status at a glance.

## Main Features

- **User Accounts**: Create your personal account to keep your financial data secure
- **Dashboard**: See your current balance, total income, and expenses
- **Expense Tracking**: Record where your money goes
- **Income Tracking**: Keep track of money you receive
- **Categories**: Organize transactions by type
- **Reports**: View charts showing your spending patterns
- **Data Export**: Download your financial data as Excel files

## Technology Used

### Backend
- Spring Boot (Java)
- MySQL Database
- JPA/Hibernate
- JWT Authentication

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

## Project Structure

```
├── backend/                  # Java Spring Boot application
│   ├── src/main/java/       # Java source code
│   └── resources/           # Configuration files
├── frontend/                # React application
    ├── src/                 # React source code
    └── public/              # Static files
```

## How to Run the Application

### Requirements

- Java 17+
- Node.js 14+
- MySQL 8.0+

### Backend Setup

1. Install Java and MySQL
2. Navigate to the backend folder: `cd money\ manager\ youtube/backend`
3. Configure database in `src/main/resources/application.properties`
4. Run: `mvnw.cmd spring-boot:run` (Windows) or `./mvnw spring-boot:run` (Mac/Linux)

### Frontend Setup

1. Install Node.js
2. Navigate to the frontend folder: `cd money\ manager\ youtube/frontend`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`
5. Open browser at: `http://localhost:5173`

## Key Features Explained

### User Authentication
- Register with email
- Login with email and password
- JWT tokens secure your session

### Dashboard
- Shows your current financial status
- Displays recent transactions
- Provides quick overview of spending patterns

### Expense & Income Management
- Add new transactions with amount, date, and category
- View transaction history
- Delete unwanted entries

### Categories
- Organize expenses and income by type
- Create custom categories
- Filter transactions by category

## Common Issues

### Backend Problems
- Make sure MySQL is running
- Check database credentials in application.properties
- Verify Java version (17+)

### Frontend Problems
- Ensure backend is running first
- Check for console errors
- Try clearing browser cache

## API Overview

- `/api/v1.0/register` - Create new account
- `/api/v1.0/login` - User authentication
- `/api/v1.0/expenses` - Manage expenses
- `/api/v1.0/incomes` - Manage income
- `/api/v1.0/categories` - Manage categories
- `/api/v1.0/dashboard` - Get dashboard data