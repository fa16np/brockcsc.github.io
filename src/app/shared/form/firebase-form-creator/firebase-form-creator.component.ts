import { FieldType, RadioInput, CheckboxInput, TextInput, Field } from './../firebase-form-shared';
import { FormInfo } from '../firebase-form-shared';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'csc-firebase-form-creator',
  templateUrl: './firebase-form-creator.component.html',
  styleUrls: ['./firebase-form-creator.component.scss']
})
export class FirebaseFormCreatorComponent implements OnInit {

  @Input() formInfo: FormInfo = { fields: [] };
  @Output() formInfoChange: EventEmitter<FormInfo> = new EventEmitter<FormInfo>();
  fieldTypes = Object.values(FieldType);
  selectedNewFieldType;
  constructor() { }

  ngOnInit() { }

  addRadioField() {
    this.formInfo.fields.push({
      type: FieldType.radio,
      description: '',
      options: [],
      name: 'The name is bond, Names Bond',
      required: false,
    } as RadioInput);
  }

  addTextField() {
    this.formInfo.fields.push({
      name: 'idk',
      description: 'Idk',
      type: FieldType.text,
      required: false,
    } as TextInput);
  }

  addCheckboxField() {
    this.formInfo.fields.push({
      type: FieldType.checkbox,
      description: '',
      name: '',
      required: false,
    } as CheckboxInput);
  }

  addNewField() {
    console.log(this.selectedNewFieldType);
    switch (this.selectedNewFieldType) {
      case FieldType.checkbox: this.addCheckboxField(); break;
      case FieldType.radio: this.addRadioField(); break;
      case FieldType.text: this.addTextField(); break;
    }
  }

  isTextInput(field: Field): boolean {
    return field.type === FieldType.text;
  }

  isCheckboxInput(field: Field): boolean {
    return field.type === FieldType.checkbox;
  }

  isRadioInput(field: Field): boolean {
    return field.type === FieldType.radio;
  }
}
