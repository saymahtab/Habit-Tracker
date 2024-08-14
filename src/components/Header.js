import React from 'react'
import Button from '@mui/material/Button';
import HabitInput from './HabitInput';


export default function Header({ handleHeaderClick }) {
  return (
    <div className="header flex justify-between items-center bg-orange-500 p-3 md:px-10 lg:px-14 w-screen">
      <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-white'>Habit Tracker</h1>
      <Button
        variant="contained"
        color='primary'
        className='w-full sm:w-32 md:w-40 lg:w-48'
        onClick={handleHeaderClick}>
        Add Habit
      </Button>
    </div>
  );
}
