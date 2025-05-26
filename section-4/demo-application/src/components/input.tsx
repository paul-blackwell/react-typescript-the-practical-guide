import { forwardRef, type ComponentPropsWithoutRef } from 'react';

// Type example
// type InputProps = {
//   label: string;
//   id: string;
// } & ComponentPropsWithoutRef<'input'>;

// Interface example
interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  id: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input name={id} id={id} {...props} ref={ref} />
    </p>
  );
});

export default Input;
