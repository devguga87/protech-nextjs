import styled from 'styled-components';

interface ButtonProps {
  width: string;
  height: string;
  border?: string;
  backgroundColor: string;
}

export const Container = styled.button<ButtonProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  border: ${props => props.border};
  border-color: ${props => props.color};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14px;
  line-height: 13px;
  text-align: center;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
