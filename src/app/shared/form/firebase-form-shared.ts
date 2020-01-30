export interface Field {
    type: FieldType;
    name: string;
    description: string;
    required: boolean;
}

export interface TextInput extends Field {
    type: FieldType.text;
    value: string;
}

export interface RadioInput extends Field {
    type: FieldType.radio;
    value: string;
    options: RadioOption[];
}

export interface RadioOption {
    name: string;
}

export interface CheckboxInput extends Field {
    type: FieldType.checkbox;
    value: boolean;
}

export interface FormInfo {
    fields: Field[];
}

export enum FieldType {
    text,
    radio,
    checkbox,
}
