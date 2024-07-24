import React from 'react';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

export default function ProgressSummary({ selectedHabit, handleBack, updateProgress }) {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleCheckboxChange = (index) => {
    updateProgress(selectedHabit.name, index);
  };

  return (
    <motion.div 
        className='text-center bg-orange-50 rounded-xl'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -50 }} 
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
      <h2 className='text-5xl mt-20 font-bold'>{selectedHabit.name}</h2>

      <div className="container flex justify-around items-center mt-14">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="box border-2 text-center rounded-xl h-36 w-44 shadow-md bg-white">
            <h5 className='font-semibold text-3xl'>{day}</h5>
            <p className='text-xs my-3 text-zinc-600'>Day {index + 1}</p>
            <input
              type="checkbox"
              className='h-10 w-10'
              onChange={() => handleCheckboxChange(index)}
            />
          </div>
        ))}
      </div>
      <Button
        variant="contained"
        color='warning'
        className='w-11/12'
        onClick={handleBack}
        sx={{ marginTop: 6 }}>
        Back
      </Button>
    </motion.div>
  );
}