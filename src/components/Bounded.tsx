import { ReactNode, createElement } from 'react';
import clsx from 'clsx';

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
};

export function Bounded({
  as = 'section',
  className,
  children,
  ...restProps
}: BoundedProps) {
  return createElement(
    as,
    {
      className: clsx(
        'px-6 ~py-10/16 [.header+&]:pt-44 [.header+&]:md:pt-32',
        className
      ),
      ...restProps,
    },
    createElement('div', { className: 'mx-auto w-full max-w-6xl' }, children)
  );
}
