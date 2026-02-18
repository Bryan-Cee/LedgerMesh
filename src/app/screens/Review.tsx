import { AlertTriangle } from "lucide-react";
import { TransactionRow } from "../components/TransactionRow";
import { getLowConfidenceTransactions } from "../data/mockData";

export function Review() {
  const lowConfidenceTransactions = getLowConfidenceTransactions();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="h-14 px-6 flex items-center justify-center border-b border-border bg-card">
        <h1 className="text-xl font-semibold text-foreground">Review</h1>
      </header>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Info Card */}
        <div className="bg-warning/10 border border-warning/20 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle size={24} className="text-warning flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-base font-semibold text-foreground mb-2">
                Low Confidence Transactions
              </h2>
              <p className="text-sm text-muted-foreground">
                These transactions have confidence scores below 75% and may need
                your attention. Review them to ensure accurate reconciliation.
              </p>
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-card rounded-2xl p-6 shadow-sm">
          <div className="text-3xl font-bold text-foreground mb-2">
            {lowConfidenceTransactions.length}
          </div>
          <div className="text-sm text-muted-foreground">
            Transactions need review
          </div>
        </div>

        {/* Low Confidence Transactions List */}
        {lowConfidenceTransactions.length > 0 ? (
          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">
              Transactions to Review
            </h3>
            <div className="bg-card rounded-2xl overflow-hidden shadow-sm">
              {lowConfidenceTransactions.map((transaction, index) => (
                <div key={transaction.id} className="relative">
                  <TransactionRow
                    id={transaction.id}
                    amount={transaction.amount}
                    counterparty={transaction.counterparty}
                    date={transaction.date}
                    confidence={transaction.confidence}
                    isMerged={transaction.isMerged}
                    showDivider={index !== lowConfidenceTransactions.length - 1}
                  />
                  {transaction.confidence === "low" && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <span className="inline-flex items-center h-6 px-2 rounded-lg text-xs font-medium bg-warning/10 text-warning border border-warning/20">
                        Needs Review
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-card rounded-2xl p-8 text-center">
            <div className="text-success text-5xl mb-4">✓</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              All Clear!
            </h3>
            <p className="text-sm text-muted-foreground">
              No transactions need your review at this time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
