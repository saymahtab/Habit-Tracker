import React, { useState, useEffect } from 'react';
import './App.css';
import HabitInput from './components/HabitInput';
import Header from './components/Header';
import HabitList from './components/HabitList';
import ProgressSummary from './components/ProgressSummary';

function App() {
  const [habitList, setHabitList] = useState([]);
  const [isComplete, setIsComplete] = useState(true);
  const [selectedHabit, setSelectedHabit] = useState(null);


  useEffect(() => {
    const storedHabits = localStorage.getItem('habitList');
    if (storedHabits) {
      try {
        const parsedHabits = JSON.parse(storedHabits);
        setHabitList(parsedHabits);
      } catch (error) {
        console.error('Error parsing local storage data:', error);
        localStorage.removeItem('habitList');
      }
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem('habitList', JSON.stringify(habitList));
  }, [habitList]);

  const addHabit = (habitName) => {
    const newHabit = {
      name: habitName,
      progress: Array(7).fill(false),
    };
    setHabitList([...habitList, newHabit]);
    setIsComplete(!isComplete);
  };

  const deleteHabit = (habitToDelete) => {
    setHabitList(habitList.filter(habit => habit.name !== habitToDelete.name));
  };

  const handleHeaderClick = () => {
    setIsComplete(!isComplete);
  };

  const handleWeakView = (habit) => {
    setSelectedHabit(habit);
  };

  const handleBack = () => {
    setSelectedHabit(null);
  };

  const updateProgress = (habitName, dayIndex) => {
    const updatedHabitList = habitList.map(habit => {
      if (habit.name === habitName) {
        const updatedProgress = [...habit.progress];
        updatedProgress[dayIndex] = !updatedProgress[dayIndex];
        return { ...habit, progress: updatedProgress };
      }
      return habit;
    });
    setHabitList(updatedHabitList);
  };

  return (
    <div className="container">
      <Header handleHeaderClick={handleHeaderClick} />
      {selectedHabit ? (
        <ProgressSummary
          selectedHabit={selectedHabit}
          handleBack={handleBack}
          updateProgress={updateProgress}
        />
      ) : (
        <>
          <HabitInput addHabit={addHabit} isComplete={isComplete} />
          <HabitList
            habitList={habitList}
            deleteHabit={deleteHabit}
            handleWeakView={handleWeakView}
          />
        </>
      )}
    </div>
  );
}

export default App;