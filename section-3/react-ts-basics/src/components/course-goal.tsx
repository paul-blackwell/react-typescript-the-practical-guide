import type { ReactNode } from 'react';

interface CourseGoalProps {
  title: string;
  children: ReactNode;
}

// Another way of doing it, just make sure to import the PropsWithChildren type
// type CourseGoalProps = PropsWithChildren<{ title: string }>

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button type="button">Delete</button>
    </article>
  );
}

// Arrow function example
// const CourseGoal = ({ title, children }: CourseGoalProps) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button type="button">Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;

// Arrow function example with FC (just make sure to import FC type)
// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button type="button">Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;
