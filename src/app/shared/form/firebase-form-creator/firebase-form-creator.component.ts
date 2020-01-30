import { FormInfo } from '../firebase-form-shared';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'csc-firebase-form-creator',
  templateUrl: './firebase-form-creator.component.html',
  styleUrls: ['./firebase-form-creator.component.scss']
})
export class FirebaseFormCreatorComponent implements OnInit {

  @Input() formInfo: FormInfo;
  @Output() formInfoChange: EventEmitter<FormInfo> = new EventEmitter<FormInfo>();

  constructor() { }

  ngOnInit() {}

  addRadioField() {

  }

  addTextField() {

  }

  addCheckboxField() {

  }

}
