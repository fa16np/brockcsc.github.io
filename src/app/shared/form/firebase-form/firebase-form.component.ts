import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {FieldType, RadioInput, FormInfo, TextInput, RadioOption, CheckboxInput, Field} from '../firebase-form-shared';

@Component({
  selector: 'csc-firebase-form',
  templateUrl: './firebase-form.component.html',
  styleUrls: ['./firebase-form.component.scss']
})
export class FirebaseFormComponent implements OnInit, AfterViewInit {
  public form: FormGroup;
  @Input() formInfo: FormInfo = {
    fields: [
      { type: FieldType.text, name: 'textfield1', description: '', value: '', } as TextInput,
      { type: FieldType.text, name: 'textfield2', description: '', value: '', } as TextInput,
      {
        type: FieldType.radio, name: 'radio1', description: '', value: '',
        options: [{ name: 'idk', description: 'One' } as RadioOption], required: false
      } as RadioInput,
      { type: FieldType.checkbox, name: 'check1', description: '', value: false } as CheckboxInput,
    ],
  };

  @ViewChild('formElement', { static: false }) formElement;
  submitted = false;

  constructor(private _formBuilder: FormBuilder) {
    let group = {
      // name: ['', [Validators.required]],
      // student_id: ['', [Validators.required]],
      // gender: ['N/A', [Validators.required]],
      // email: ['', [Validators.email]],
      // program: ['', [Validators.required]],
      // number_of_years_member: [0, [Validators.min(0), Validators.max(10)]],
      // interests: '',
    };

    this.formInfo.fields.forEach((field) => {
      group[field.name] = ['', [Validators.required]];
    });

    this.form = this._formBuilder.group(group);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  isTextInput(field: Field) {
    return field.type === FieldType.text;
  }

  isRadioInput(field: Field) {
    return field.type === FieldType.radio;
  }

  isCheckboxInput(field: Field) {
    return field.type === FieldType.checkbox;
  }
}
