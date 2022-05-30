import { DynamicField } from '../../shared/models/dynamic-field';
import { Game } from '../../shared/models/game';
import { getFieldValue } from './games-field-factory';

function getDynamicField(type: string, key = ''): DynamicField {
  return {
    key,
    type,
    allow_empty: false,
    allow_null: false,
    required: false,
    read_only: false,
    label: '',
  };
}

describe('Games Field Factory', () => {
  describe('getFieldValue', () => {
    const game: Game = {
      id: 1,
      name: 'casino_royale',
      game_reporting_name: 'Casino Royale',
      game_family: 'Lottery Game',
      branded: false,
      jackpot: false,
      uk_enabled: false,
      invalid: false,
      updated_at: '2021-08-06 08:04:00 UTC',
      updated_by_username: 'John Doe"',
    };

    it('defaultFieldValue boolean ', () => {
      const booleanField = getDynamicField('boolean');
      const undefinedGame = undefined;
      const value = getFieldValue(undefinedGame, booleanField);
      expect(value).toStrictEqual(false);
    });

    it('defaultFieldValue string ', () => {
      const stringField = getDynamicField('string');
      const undefinedGame = undefined;
      const value = getFieldValue(undefinedGame, stringField);
      expect(value).toStrictEqual('');
    });

    it('getValue gameReportingField', () => {
      const gameReportingField = getDynamicField(
        'string',
        'game_reporting_name'
      );
      const value = getFieldValue(game, gameReportingField);
      expect(value).toStrictEqual('Casino Royale');
    });

    it('getValue jackpot', () => {
      const jackpotField = getDynamicField('string', 'jackpot');
      const value = getFieldValue(game, jackpotField);
      expect(value).toStrictEqual(false);
    });
  });
});
