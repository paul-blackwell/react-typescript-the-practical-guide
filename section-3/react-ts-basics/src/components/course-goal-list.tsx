import CourseGoal from './course-goal';
import { type CourseGoal as CGoal } from '../App';

interface CourseGoalListProps {
  goals: CGoal[];
  onDelete: (id: number) => void;
}

export default function CourseGoalList({
  goals,
  onDelete,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDelete}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
