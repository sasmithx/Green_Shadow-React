interface ActionButtonProps {
    id: string;
    label: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

export const ActionButton = ({ id, label, style, onClick }: ActionButtonProps) => (
    <button
        type="button"
        className="btn btn-dark px-4"
        style={style}
        id={id}
        onClick={onClick}
    >
        {label}
    </button>
);