import { useRef } from 'react';
import Form, { type FormHandle } from './components/form';
import Input from './components/input';
import Button from './components/button';

function App() {
  const customFromRef = useRef<FormHandle>(null);
  // const inputRef = useRef(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as {
      name: string;
      age: string; // Values entered into an input will always be type of string
    };
    console.log(extractedData);
    const formErrors = customFromRef.current?.validate();
    console.log('formErrors', formErrors);
    if (formErrors && formErrors.length === 0) {
      customFromRef.current?.clear();
    }
  };

  return (
    <main>
      <Form onSave={handleSave} ref={customFromRef}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button type="submit">Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
