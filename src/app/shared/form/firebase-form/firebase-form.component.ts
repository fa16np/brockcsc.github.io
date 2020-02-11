import { Component, OnInit, Input, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FieldType, RadioInput, FormInfo, TextInput, RadioOption, CheckboxInput, Field } from '../firebase-form-shared';

@Component({
  selector: 'csc-firebase-form',
  templateUrl: './firebase-form.component.html',
  styleUrls: ['./firebase-form.component.scss']
})
export class FirebaseFormComponent implements OnInit, AfterViewInit, OnChanges {
  public form: FormGroup;
  @Input() formInfo: FormInfo = {
    fields: [
      { type: FieldType.text, name: 'textfield1', description: '' } as TextInput,
      { type: FieldType.text, name: 'textfield2', description: '' } as TextInput,
      {
        type: FieldType.radio, name: 'radio1', description: '', value: '',
        options: [{ name: 'idk', description: 'One' } as RadioOption], required: false
      } as RadioInput,
      { type: FieldType.checkbox, name: 'check1', description: '' } as CheckboxInput,
    ],
  };

  ngOnChanges(changes: SimpleChanges): void {
    this.initForm();
  }

  @ViewChild('formElement') formElement;
  submitted = false;

  constructor(private _formBuilder: FormBuilder) {
    this.initForm();
  }

  initForm() {
    const group = {
    };

    this.formInfo.fields.forEach((field) => {
      group[field.name] = ['', [Validators.required]];
    });

    this.form = this._formBuilder.group(group);
  }

  ngOnInit() {
    console.log(this.formInfo);
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
