import { ReactNode } from "react";

interface DashboardOrDeleteSectionProps {
    title: string;
    children: ReactNode;
}

export const DashboardOrDeleteSection = ({ title, children }: DashboardOrDeleteSectionProps) => {
    return (
        <div className="container py-4">
            <h2 className="mb-4">
                {title}
            </h2>
            <div className="row g-3">
                {children}
            </div>
        </div>
    );
};
