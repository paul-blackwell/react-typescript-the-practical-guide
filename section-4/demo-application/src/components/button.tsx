import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

// interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
//   element: 'button';
// }

// interface AnchorProps extends ComponentPropsWithoutRef<'a'> {
//   element: 'anchor';
// }

// Interface example but the error it gives you is not as clear
// interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
//   href?: never; // This stops anchor attributes being added to a button
// }
// interface AnchorProps extends ComponentPropsWithoutRef<'a'> {
//   href?: string;
// }

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  href?: never; // This stops anchor attributes being added to a button
  children: ReactNode;
};
type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  href?: string;
  children: ReactNode;
};

const isAnchorProps = (
  props: ButtonProps | AnchorProps
): props is AnchorProps => {
  return 'href' in props;
};

export default function Button(props: ButtonProps | AnchorProps) {
  const { children } = props;
  if (isAnchorProps(props))
    return (
      <a className="button" {...props}>
        {children}
      </a>
    );

  // If we didn't have the  props is AnchorProps on the isAnchorProps we would have to do this
  // const { type = 'button', ...otherProps } = props as ButtonProps;

  const { type = 'button', ...otherProps } = props;
  return (
    <button className="button" type={type} {...otherProps}>
      {children}
    </button>
  );
}
