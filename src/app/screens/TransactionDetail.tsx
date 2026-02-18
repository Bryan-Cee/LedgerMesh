import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Edit2, GitMerge, Scissors, AlertTriangle } from "lucide-react";
import { getTransactionById } from "../data/mockData";
import { ConfidenceBadge } from "../components/ConfidenceBadge";

export function TransactionDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const transaction = id ? getTransactionById(id) : null;

  if (!transaction) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg font-semibold text-foreground mb-2">
            Transaction not found
          </div>
          <button
            onClick={() => navigate(-1)}
            className="text-primary hover:underline"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="h-14 px-6 flex items-center gap-4 border-b border-border bg-card">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={24} className="text-foreground" />
        </button>
        <h1 className="text-xl font-semibold text-foreground">Transaction Detail</h1>
      </header>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Canonical Transaction Card */}
        <div className="bg-card rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">
              Canonical Transaction
            </h2>
            <ConfidenceBadge
              confidence={transaction.confidence}
              showPercentage
              percentage={transaction.confidenceScore}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-xs text-muted-foreground mb-1">Amount</div>
                <div
                  className={`text-2xl font-bold ${
                    transaction.amount >= 0 ? "text-success" : "text-foreground"
                  }`}
                >
                  {transaction.amount >= 0 ? "+" : ""}$
                  {Math.abs(transaction.amount).toFixed(2)}
                </div>
              </div>
              <button className="p-2 hover:bg-accent rounded-lg">
                <Edit2 size={18} className="text-muted-foreground" />
              </button>
            </div>

            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-xs text-muted-foreground mb-1">
                  Counterparty
                </div>
                <div className="text-base font-medium text-foreground">
                  {transaction.counterparty}
                </div>
              </div>
              <button className="p-2 hover:bg-accent rounded-lg">
                <Edit2 size={18} className="text-muted-foreground" />
              </button>
            </div>

            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-xs text-muted-foreground mb-1">Date</div>
                <div className="text-base font-medium text-foreground">
                  {transaction.date}, 2026
                </div>
              </div>
              <button className="p-2 hover:bg-accent rounded-lg">
                <Edit2 size={18} className="text-muted-foreground" />
              </button>
            </div>

            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-xs text-muted-foreground mb-1">Category</div>
                <div className="text-base font-medium text-foreground">
                  {transaction.category}
                </div>
              </div>
              <button className="p-2 hover:bg-accent rounded-lg">
                <Edit2 size={18} className="text-muted-foreground" />
              </button>
            </div>

            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-xs text-muted-foreground mb-1">Reference</div>
                <div className="text-base font-medium text-foreground font-mono text-sm">
                  {transaction.reference}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Observations Section */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Observations ({transaction.observations.length})
          </h2>
          <div className="space-y-3">
            {transaction.observations.map((observation) => (
              <div
                key={observation.id}
                className="bg-card rounded-xl p-4 border border-border"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`inline-flex items-center h-6 px-2 rounded-lg text-xs font-medium ${
                      observation.source === "SMS"
                        ? "bg-primary/10 text-primary"
                        : observation.source === "PDF"
                        ? "bg-warning/10 text-warning"
                        : "bg-success/10 text-success"
                    }`}
                  >
                    {observation.source}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {observation.timestamp}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mb-2">
                  Ref: {observation.reference}
                </div>
                <div className="text-sm text-foreground bg-accent/30 rounded-lg p-3 font-mono">
                  {observation.rawSnippet}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
            <GitMerge size={18} />
            Force Merge
          </button>
          <button className="w-full h-12 rounded-xl border-2 border-border text-foreground font-medium flex items-center justify-center gap-2 hover:bg-accent transition-colors">
            <Scissors size={18} />
            Split Transaction
          </button>
          <button className="w-full h-12 rounded-xl border-2 border-destructive text-destructive font-medium flex items-center justify-center gap-2 hover:bg-destructive/10 transition-colors">
            <AlertTriangle size={18} />
            Mark as Duplicate
          </button>
        </div>
      </div>
    </div>
  );
}
