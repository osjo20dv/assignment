export interface Game {
  id: number;
  name: string;
  game_reporting_name: string;
  game_family: string;
  branded: boolean;
  jackpot: boolean;
  uk_enabled: boolean;
  invalid: boolean;
  updated_at: string;
  updated_by_username: string;
}
