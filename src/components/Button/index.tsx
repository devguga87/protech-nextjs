interface ButtonProps {
  children: string;
}

export function Button({ children }) {
  return <button type="button">{children}</button>;
}
