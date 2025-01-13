interface DashboardStatsProps {
    label: string;
    value: number;
}

export function DashboardStats({ label, value }: DashboardStatsProps) {
    return (
        <div className="bg-white rounded shadow-sm p-4 border border-light">
            <p className="small text-muted mb-1">{label}</p>
            <p className="h4 fw-bold text-primary">{value}</p>
        </div>
    );
}
