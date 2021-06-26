import { ButtonHTMLAttributes } from 'react'

import { Btn } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <Btn
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  );
}
