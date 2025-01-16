export const ActionButton = ({ id, label, style }) => (
    <button
        type="button"
        className="btn btn-dark px-4"
        style={style}
        id={id}
    >
        {label}
    </button>
);