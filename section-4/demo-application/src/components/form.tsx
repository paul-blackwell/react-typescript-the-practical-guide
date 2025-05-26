import {
  type FormEvent,
  type ComponentPropsWithoutRef,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};

export type FormHandle = {
  clear: () => void;
  validate: () => string[];
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps },
  ref
) {
  const formRef = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log('CLEARING');
        formRef.current?.reset();
      },
      validate() {
        const errors = [];
        const form = formRef.current;
        if (!form) return [];
        // You can add custom validation logic here
        // For demonstration, let's just check if all inputs are filled
        const inputs = Array.from(form.elements).filter(
          (el) => (el as HTMLInputElement).tagName === 'INPUT'
        ) as HTMLInputElement[];
        // return inputs.every((input) => input.value.trim() !== '');
        if (inputs.some((input) => input.value.trim() === '')) {
          errors.push('Please fill in all fields');
        }
        return errors;
      },
    };
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData); // Converts formData object to a simpler object
    onSave(data);
    // formRef.current?.reset(); Clear in Form component
  };

  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={formRef}>
      {children}
    </form>
  );
});

export default Form;
