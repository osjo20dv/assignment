export interface DynamicField {
  key: string;
  type: string;
  required: boolean;
  allow_empty: boolean;
  allow_null: boolean;
  read_only: boolean;
  max_length?: number;
  label: string;
}
