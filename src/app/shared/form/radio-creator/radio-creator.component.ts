import { RadioInput, FieldType, RadioOption } from '../../api/form/firebase-form-shared';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'csc-radio-creator',
  templateUrl: './radio-creator.component.html',
  styleUrls: ['./radio-creator.component.scss']
})
export class RadioCreatorComponent implements OnInit {

  @Input() radio: RadioInput = {
    type: FieldType.radio,
    description: '',
    options: [],
    name: 'The name is bond, Names Bond',
    required: false,
  };
  @Output() radioChange: EventEmitter<RadioInput> = new EventEmitter();
  newOptionName: string;

  constructor() {
  }

  ngOnInit() {
  }

  addOption() {
    this.radio.options.push({ name: this.newOptionName });
    this.newOptionName = '';
  }

  deleteOption(option: RadioOption) {
    this.radio.options.forEach((value, index) => {
      if (value.name === option.name) {
        this.radio.options.splice(index, 1);
        return;
      }
    });
  }
}
