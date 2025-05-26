import { useRef } from 'react';
import Input from './components/input';

function App() {
  const inputRef = useRef(null);

  return (
    <main>
      <Input label="Test" id="test" ref={inputRef} />
    </main>
  );
}

export default App;
