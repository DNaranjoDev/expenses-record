import React, {useState} from 'react'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import ExpensesList from './ExpensesList'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2023')

  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear
  })
  return (
    <Card className="expenses">
      <ExpensesFilter 
        selected={filterYear} 
        onFilterChange={filterChangeHandler} 
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
