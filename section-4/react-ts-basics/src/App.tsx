import { useState } from 'react';
import CourseGoalList from './components/course-goal-list.tsx';
import CourseGoal from './components/course-goal.tsx';
import goalsImg from './assets/goals.jpg';
import Header from './components/header.tsx';
import NewGoal from './components/new-goal.tsx';

export interface CourseGoal {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  };

  const handleDeletedGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id != id));
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your course goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDelete={handleDeletedGoal} />
    </main>
  );
}
