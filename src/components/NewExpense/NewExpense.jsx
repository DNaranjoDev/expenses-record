import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setIsAdding(false)
  }

  const startAddHandler = () => {
    setIsAdding(true)
  }

  const stopAddHandler = () => {
    setIsAdding(false)
  }

  return (
    <div className='new-expense'>
        {!isAdding && <button className='new-expense' onClick={startAddHandler}>Add New Expense</button>}
        {isAdding && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopAddHandler} />}
    </div>
  )
}

export default NewExpense
