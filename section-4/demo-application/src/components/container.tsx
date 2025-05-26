// This is an example of a Polymorphic component (See lesions 55 & 56)

import {
  type ElementType,
  type ReactNode,
  type ComponentPropsWithoutRef,
} from 'react';

// interface ContainerProps extends ComponentPropsWithoutRef<> {
//   as: ElementType;
//   children: ReactNode;
// }

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || 'section';
  return (
    <Component className="container" {...props}>
      {children}
    </Component>
  );
}

// Could also do this
// export default function Container({ as }: ContainerProps) {
//   const Component = as;
//   return <Component />;
// }
