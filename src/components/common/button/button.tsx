import React, { MouseEventHandler } from 'react';
import * as S from './button.styled';

type ButtonProps = {
  children: string,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
  isActive?: boolean
}

const Button = ({ children, ...props }: ButtonProps) => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
