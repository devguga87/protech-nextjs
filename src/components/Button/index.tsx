import * as S from './styles';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  width: string;
  height: string;
  color: string;
  backgroundColor: string;
}

export function Button({
  width,
  height,
  color,
  backgroundColor,
  children,
  ...rest
}: ButtonProps) {
  return (
    <S.Container
      width={width}
      height={height}
      color={color}
      backgroundColor={backgroundColor}
      type="button"
      {...rest}
    >
      {children}
    </S.Container>
  );
}
