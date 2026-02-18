import { Link } from "react-router";
import { ConfidenceBadge } from "./ConfidenceBadge";
import { GitMerge, FileText } from "lucide-react";

interface TransactionRowProps {
  id: string;
  amount: number;
  counterparty: string;
  date: string;
  confidence: "high" | "medium" | "low";
  isMerged?: boolean;
  showDivider?: boolean;
}

export function TransactionRow({
  id,
  amount,
  counterparty,
  date,
  confidence,
  isMerged = false,
  showDivider = true,
}: TransactionRowProps) {
  const isPositive = amount >= 0;
  
  return (
    <Link
      to={`/transaction/${id}`}
      className={`flex items-center h-[72px] px-4 hover:bg-accent/50 transition-colors ${
        showDivider ? "border-b border-border" : ""
      }`}
    >
      <div className="flex-1 flex items-center gap-3">
        {isMerged ? (
          <GitMerge size={16} className="text-muted-foreground flex-shrink-0" />
        ) : (
          <FileText size={16} className="text-muted-foreground flex-shrink-0" />
        )}
        <div className="flex-1 min-w-0">
          <div className={`font-medium ${isPositive ? "text-success" : "text-foreground"}`}>
            {isPositive ? "+" : ""}${Math.abs(amount).toFixed(2)}
          </div>
          <div className="text-sm text-muted-foreground truncate">{counterparty}</div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1 ml-4">
        <ConfidenceBadge confidence={confidence} />
        <div className="text-xs text-muted-foreground">{date}</div>
      </div>
    </Link>
  );
}
