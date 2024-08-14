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
      className='text-center bg-orange-50 rounded-xl p-6 w-screen'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -50 }} 
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
      <h2 className='text-2xl sm:text-3xl md:text-5xl mt-4 font-bold'>{selectedHabit.name}</h2>

      <div className="container flex flex-col sm:flex-row sm:flex-wrap justify-around items-center mt-10">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="box border-2 text-center rounded-xl p-4 m-2 shadow-md w-full sm:w-48 md:w-56 bg-white">
            <h5 className='text-base sm:text-lg md:text-xl'>{day}</h5>
            <p className='text-xs sm:text-sm md:text-base text-zinc-600'>Day {index + 1}</p>
            <input
              type="checkbox"
              className='h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 mt-2'
              onChange={() => handleCheckboxChange(index)}
            />
          </div>
        ))}
      </div>
      <Button
        variant="contained"
        color='warning'
        className='w-full mt-6'
        onClick={handleBack}>
        Back
      </Button>
    </motion.div>
  );
}
