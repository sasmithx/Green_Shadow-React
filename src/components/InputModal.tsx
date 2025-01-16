import {CSSProperties} from "react";

interface InputFieldProps {
    label: string;
    id: string;
    name: string;
    type?: string;
    required?: boolean;
    style?: CSSProperties;
}

export const InputField = ({ label, id, name, type = "text", required = false, style, ...rest }: InputFieldProps) => (
    <div className="col-md-6 mb-3">
        <label htmlFor={id}>{label}</label>
        <input
            type={type}
            className="form-control"
            id={id}
            name={name}
            style={style}
            required={required}
            {...rest}
        />
    </div>
);