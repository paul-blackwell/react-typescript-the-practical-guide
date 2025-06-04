import TimersContextProvider from './store/timers-context.tsx';
import AddTimer from './components/add-timer.tsx';
import Header from './components/header.tsx';
import Timers from './components/timers.tsx';

function App() {
  return (
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  );
}

export default App;
