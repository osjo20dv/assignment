import { DynamicField } from './dynamic-field';

export interface DynamicForm {
  name: string;
  fields: DynamicField[];
  options: Options;
}

export interface Field {
  key: string;
  type: string;
  required: boolean;
  allow_empty: boolean;
  allow_null: boolean;
  read_only: boolean;
  label: string;
  max_length?: number;
}

export interface Options {
  game_family: GameFamily;
}

export interface GameFamily {
  options: Option[];
  multiple: boolean;
  value_field: string;
  display_field: string;
}

export interface Option {
  id: number;
  game_family: string;
  descriptive_name: string;
}
