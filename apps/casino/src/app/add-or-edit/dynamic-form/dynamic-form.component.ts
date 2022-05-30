import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DynamicField } from '../../shared/models/dynamic-field';
import { DynamicForm } from '../../shared/models/dynamic-form';
import { Game } from '../../shared/models/game';
import { getFieldValue } from '../logic/games-field-factory';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnChanges {
  @Input() dynamicForm: DynamicForm | null = null;
  @Input() game: Game | undefined | null = undefined;
  @Input() username: string | null = '';
  @Output() saveGame = new EventEmitter<Game>();

  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnChanges(): void {
    this.createForm(this.dynamicForm?.fields ?? []);
  }

  createForm(fields: DynamicField[]) {
    for (const field of fields) {
      const validatorsToAdd = [];

      if (field.required === true && field.allow_empty === true) {
        validatorsToAdd.push(Validators.required);
      }

      if (field.allow_empty === false) {
        validatorsToAdd.push(Validators.minLength(1));
        validatorsToAdd.push(Validators.required);
      }
      if (!field.allow_null === true) {
        validatorsToAdd.push(Validators.nullValidator);
      }

      let value = getFieldValue(this.game, field);

      if (
        field.key === 'game_family' &&
        (this.game === undefined || this.game === null)
      ) {
        value = this.getOptionsGameFamily()[0].descriptive_name;
      }

      const formControl = this.fb.control(
        {
          value,
          disabled: field.read_only,
        },
        validatorsToAdd
      );
      this.form.addControl(field.key, formControl);
    }
  }

  errorMessage(key: string) {
    const controlIsValid: boolean = this.form.get(key)?.valid ?? false;
    return controlIsValid ? '' : 'Field is not valid.';
  }

  onSubmit() {
    if (this.form.valid) {
      const rawData: Game = this.form.getRawValue();
      rawData.updated_by_username = this.username ?? '';
      this.saveGame.emit(rawData);
    }
  }

  getOptionsGameFamily() {
    return this.dynamicForm?.options.game_family?.options ?? [];
  }
}
