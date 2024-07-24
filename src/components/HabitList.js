import React from 'react';
import HabitItem from './HabitItem';

export default function HabitList({ habitList, deleteHabit, handleWeakView }) {
  return (
    <ul>
      {habitList.map((habit, index) => (
        <HabitItem
          key={index}
          habit={habit}
          deleteHabit={() => deleteHabit(habit)}
          handleWeakView={() => handleWeakView(habit)}
        />
      ))}
    </ul>
  );
}