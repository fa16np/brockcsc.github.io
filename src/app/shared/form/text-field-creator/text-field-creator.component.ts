import { Component, OnInit, Output, ViewChild, Input, EventEmitter } from '@angular/core';
import { FieldType, TextInput } from '../firebase-form-shared';

@Component({
  selector: 'csc-text-field-creator',
  templateUrl: './text-field-creator.component.html',
  styleUrls: ['./text-field-creator.component.scss']
})
export class TextFieldCreatorComponent implements OnInit {

  @Input() text: TextInput = {
    name: 'idk',
    description: 'Idk',
    type: FieldType.text,
    required: false,
  };
  @Output() textChange: EventEmitter<TextInput> = new EventEmitter();

  ngOnInit() {
  }
}
