export const SelectField = ({ label, id, name, options, required = false, style, ...rest }) => (
    <div className="col-md-4 mb-3">
        <label htmlFor={id}>{label}</label>
        <select
            className="form-control"
            id={id}
            name={name}
            style={style}
            defaultValue=""
            required={required}
            {...rest}
        >
            <option value="" disabled>
                {`Select ${label}`}
            </option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);