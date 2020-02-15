import { CheckboxInput, FieldType } from '../../api/form/firebase-form-shared';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'csc-checkbox-creator',
  templateUrl: './checkbox-creator.component.html',
  styleUrls: ['./checkbox-creator.component.scss']
})
export class CheckboxCreatorComponent implements OnInit {

  @Input() checkbox: CheckboxInput = {
    type: FieldType.checkbox,
    description: '',
    name: '',
    required: false,
  };
  @Output() checkboxChange: EventEmitter<CheckboxInput> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
