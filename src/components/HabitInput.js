import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function HabitInput({addHabit, isComplete}) {

  const [habit, setHabit] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if(habit) {
      addHabit(habit);
      setHabit('');
    }
  }

  return (
    <>
      {isComplete && (<motion.form 
        onSubmit={handleSubmit}
        className='h-48 w-1/3 mx-auto mt-10 md-12 text-center border-2'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
      <h1 
        className='text-3xl text-center'>
          Add New Habit
      </h1>
      <TextField
        label="Enter your Habit"
        id="outlined-size-small"
        className='w-11/12 h-132 border-2 p-2 '
        onChange={(e) => {setHabit(e.target.value)}}
        value={habit}
        sx = {{marginTop: 2}}
      />
      <Button 
        type='submit'
        variant="contained" 
        className='w-11/12'
        sx = {{marginTop: 2}}>
          Add Habit
      </Button>
    </motion.form>)}
    </>
  )
}