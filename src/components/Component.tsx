import React from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
};

export const Component = ({ children, title }: Props): JSX.Element => {
  return (
    <div>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
};
