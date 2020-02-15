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

export const randomUid = (length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
