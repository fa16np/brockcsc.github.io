import {Component, OnInit, Input, ViewChild, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {FieldType, FormInfo, Field} from '../../api/form/firebase-form-shared';
import {FormApiService} from '../../api/form/form-api.service';


@Component({
    selector: 'csc-firebase-form',
    templateUrl: './firebase-form.component.html',
    styleUrls: ['./firebase-form.component.scss']
})
export class FirebaseFormComponent implements OnInit, AfterViewInit, OnChanges {
    public form: FormGroup;
    @Input() formId: string;
    formInfo: FormInfo;
    @ViewChild('formElement') formElement;
    submitted = false;
    submitting = false;

    constructor(private _formBuilder: FormBuilder, private _formApiService: FormApiService) {

    }

    ngOnChanges(changes: SimpleChanges): void {
    }

    initForm() {
        const group = {};

        this.formInfo.fields.forEach((field) => {
            group[field.name] = ['', [Validators.required]];
        });

        this.form = this._formBuilder.group(group);
    }

    ngOnInit() {
        this._formApiService.getFormOnce(this.formId).subscribe(value => {
            this.formInfo = value;
            if (value) {
                this.initForm();
            }
        });
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

    submitForm() {
        this.submitting = true;
        this._formApiService.addEntry(this.formId, this.form.value).then(() => {
            this.submitted = true;
        }).catch();
    }
}
