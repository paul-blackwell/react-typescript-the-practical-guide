import { type Timer as TimerProps } from '../store/timers-context.tsx';
import Container from './UI/container.tsx';

export default function Timer({ name, duration }: TimerProps) {
  return (
    <Container as="article">
      <h2>TODO: {name}</h2>
      <p>{duration}</p>
    </Container>
  );
}
