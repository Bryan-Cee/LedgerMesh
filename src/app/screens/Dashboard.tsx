import { Menu, TrendingUp } from "lucide-react";
import { TransactionRow } from "../components/TransactionRow";
import { mockTransactions, mockCategories } from "../data/mockData";

export function Dashboard() {
  const balance = mockTransactions.reduce((sum, t) => sum + t.amount, 0);
  const income = mockTransactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);
  const expenses = mockTransactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const recentTransactions = mockTransactions.slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="h-14 px-6 flex items-center justify-between border-b border-border bg-card">
        <Menu size={24} className="text-foreground" />
        <h1 className="text-xl font-semibold text-foreground">LedgerMesh</h1>
        <div className="w-6" />
      </header>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Balance Summary Card */}
        <div className="bg-card rounded-2xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
          <div className="space-y-3">
            <div className="text-3xl font-bold text-foreground">
              ${Math.abs(balance).toFixed(2)}
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">
              This Month
            </div>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp size={16} className="text-success" />
              <span className="text-muted-foreground">
                +{((income / (income + expenses)) * 100).toFixed(1)}% vs last month
              </span>
            </div>
          </div>

          {/* Income/Expense Breakdown */}
          <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
            <div>
              <div className="text-xs text-muted-foreground mb-1">Income</div>
              <div className="text-lg font-semibold text-success">
                +${income.toFixed(2)}
              </div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Expenses</div>
              <div className="text-lg font-semibold text-destructive">
                -${expenses.toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        {/* Category Chips */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">Categories</h2>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {mockCategories.map((category) => (
              <div
                key={category.name}
                className="flex-shrink-0 bg-card rounded-[20px] px-4 py-3 shadow-sm border border-border min-w-[140px]"
              >
                <div className="text-sm font-medium text-foreground">
                  {category.name}
                </div>
                <div
                  className={`text-base font-semibold mt-1 ${
                    category.amount >= 0 ? "text-success" : "text-foreground"
                  }`}
                >
                  {category.amount >= 0 ? "+" : ""}${Math.abs(category.amount).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Recent Transactions
          </h2>
          <div className="bg-card rounded-2xl overflow-hidden shadow-sm">
            {recentTransactions.map((transaction, index) => (
              <TransactionRow
                key={transaction.id}
                id={transaction.id}
                amount={transaction.amount}
                counterparty={transaction.counterparty}
                date={transaction.date}
                confidence={transaction.confidence}
                isMerged={transaction.isMerged}
                showDivider={index !== recentTransactions.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}