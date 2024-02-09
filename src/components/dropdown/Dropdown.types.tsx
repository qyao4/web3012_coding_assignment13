// src/components/dropdown/Dropdown.types.ts
export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  disabled?: boolean;
  backgroundColor?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
