interface ActionButtonProps {
    id: string;
    label: string;
    style?: React.CSSProperties;
}

export const ActionButton = ({ id, label, style }: ActionButtonProps) => (
    <button
        type="button"
        className="btn btn-dark px-4"
        style={style}
        id={id}
    >
        {label}
    </button>
);