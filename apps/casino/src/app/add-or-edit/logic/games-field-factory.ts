import { DynamicField } from '../../shared/models/dynamic-field';
import { Game } from '../../shared/models/game';

/**
 * If new game is begin created it gets default values for the field
 * @param game
 * @param field
 * @returns
 */
export function getFieldValue(
  game: Game | null | undefined,
  field: DynamicField
) {
  if (game === undefined) {
    return defaultFieldValue(field);
  } else {
    return getValue(field.key, game);
  }
}

/**
 * Access value with key
 * @param key
 * @param game
 * @returns
 */
function getValue(key: string, game: Game | null | undefined) {
  const gameEntries = Object.entries(game ?? {});
  const entry = gameEntries.filter((entry) => entry[0] === key);
  const value = entry[0][1];
  return value;
}

/**
 * Returns base values for diffrent types
 * @param field
 * @returns
 */
function defaultFieldValue(field: DynamicField) {
  if (field.type === 'string') {
    return '';
  } else if (field.type === 'integer') {
    return getRandomInt();
  } else if (field.type === 'boolean') {
    return false;
  } else if (field.type === 'datetime') {
    return Date.now();
  }
  return '';
}

function getRandomInt() {
  const min = Number.MIN_SAFE_INTEGER;
  const max = Number.MAX_SAFE_INTEGER;
  return Math.abs(Math.floor(Math.random() * (max - min + 1)) + min);
}
