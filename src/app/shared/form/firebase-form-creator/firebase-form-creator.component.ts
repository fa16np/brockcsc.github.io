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
  fieldTypes = [FieldType.checkbox, FieldType.radio, FieldType.text];
  selectedNewFieldType;
  constructor() { }

  ngOnInit() { }

  makeId(length): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  addRadioField() {
    this.formInfo.fields.push({
      type: FieldType.radio,
      description: '',
      options: [],
      name: this.makeId(5),
      required: false,
    } as RadioInput);
  }

  addTextField() {
    this.formInfo.fields.push({
      name: this.makeId(5),
      description: 'Idk',
      type: FieldType.text,
      required: false,
    } as TextInput);
  }

  addCheckboxField() {
    this.formInfo.fields.push({
      type: FieldType.checkbox,
      description: '',
      name: this.makeId(5),
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
