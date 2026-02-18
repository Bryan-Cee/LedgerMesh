import { cn } from "./ui/utils";

interface ConfidenceBadgeProps {
  confidence: "high" | "medium" | "low";
  showPercentage?: boolean;
  percentage?: number;
}

export function ConfidenceBadge({ confidence, showPercentage, percentage }: ConfidenceBadgeProps) {
  const styles = {
    high: "bg-success/10 text-success border-success/20",
    medium: "bg-warning/10 text-warning border-warning/20",
    low: "bg-destructive/10 text-destructive border-destructive/20",
  };

  const labels = {
    high: "High",
    medium: "Medium",
    low: "Low",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center h-6 px-2 rounded-xl text-xs font-medium border",
        styles[confidence]
      )}
    >
      {showPercentage && percentage ? `${percentage}%` : labels[confidence]}
    </span>
  );
}
