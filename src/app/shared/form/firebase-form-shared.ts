export interface Field {
    type: FieldType;
    name: string;
    description: string;
    required: boolean;
}

export interface TextInput extends Field {
    type: FieldType.text;
}

export interface RadioInput extends Field {
    type: FieldType.radio;
    options: RadioOption[];
}

export interface RadioOption {
    name: string;
}

export interface CheckboxInput extends Field {
    type: FieldType.checkbox;
}

export interface FormInfo {
    fields: Field[];
}

export enum FieldType {
    text = 'Text',
    radio = 'Radio',
    checkbox = 'Checkbox',
}
