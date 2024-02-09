// components/button/Button.types.ts

// Export the ButtonProps type for reuse in your project
export interface ButtonProps {
  text: string;
  backgroundColor?: string;
  onClick: () => void;
  disabled?: boolean;
}
