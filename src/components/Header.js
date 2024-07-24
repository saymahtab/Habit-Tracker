import React from 'react'
import Button from '@mui/material/Button';
import HabitInput from './HabitInput';


export default function Header({handleHeaderClick}) {

  return (
    <div className="header flex justify-between items-center bg-orange-500 p-3 px-14">
      <h1 className='text-3xl font-bold text-white font-sans'>Habit Tracker</h1>
      <Button
        variant="contained" 
        color='primary'
        onClick={handleHeaderClick}>
          Add Habit
      </Button>
    </div>
  )
}