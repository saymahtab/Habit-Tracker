import React from 'react';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';


export default function HabitItem({ habit, deleteHabit, handleWeakView, updateProgress }) {

    let completedDays = 0;

    if (habit && habit.progress) {
      completedDays = habit.progress.filter(day => day).length;
    }
    

  return (
    <motion.li 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className='flex justify-between items-center bg-orange-100 border-2 w-11/12 rounded-xl p-4 m-4 mx-auto border-b-stone-400'>
      <div className='ml-5'>
        <h2 className='text-2xl'>{habit?.name}</h2>
        <p className='text-stone-600'>{completedDays}/7 days</p>
      </div>
      <div className='w-1/4 flex justify-around'>
        <Button
          variant="contained"
          color='primary'
          className='w-36'
          onClick={() => handleWeakView(habit)}>
          Weak View
        </Button>
        <Button
          variant="contained"
          color='warning'
          className='w-20'
          onClick={() => deleteHabit(habit)}>
          Delete
        </Button>
      </div>
    </motion.li>
  );
}