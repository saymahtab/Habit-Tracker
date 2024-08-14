import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function HabitInput({ addHabit, isComplete }) {
  const [habit, setHabit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habit) {
      addHabit(habit);
      setHabit('');
    }
  };

  return (
    <>
      {isComplete && (
        <motion.form
          onSubmit={handleSubmit}
          className='w-full sm:w-4/5 md:w-3/4 lg:w-1/2 mx-auto mt-10 p-4 text-center border-2 rounded-lg'
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4'>
            Add New Habit
          </h1>
          <TextField
            label="Enter your Habit"
            id="outlined-size-small"
            className='w-full sm:w-11/12 md:w-10/12'
            onChange={(e) => setHabit(e.target.value)}
            value={habit}
            size="small"
            sx={{
              '& .MuiInputBase-input': {
                padding: '10px',
              },
            }}
          />
          <Button
            type='submit'
            variant="contained"
            className='w-full sm:w-11/12 md:w-10/12'
            sx={{
              padding: '8px',
              fontSize: '16px',
            }}
          >
            Add Habit
          </Button>
        </motion.form>
      )}
    </>
  );
}
