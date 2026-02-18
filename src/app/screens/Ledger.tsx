import { useState } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import { TransactionRow } from "../components/TransactionRow";
import { mockTransactions } from "../data/mockData";

export function Ledger() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Group transactions by date
  const groupedTransactions = mockTransactions.reduce((groups, transaction) => {
    const group = groups.find((g) => g.dateGroup === transaction.dateGroup);
    if (group) {
      group.transactions.push(transaction);
    } else {
      groups.push({
        dateGroup: transaction.dateGroup,
        transactions: [transaction],
      });
    }
    return groups;
  }, [] as Array<{ dateGroup: string; transactions: typeof mockTransactions }>);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="h-14 px-6 flex items-center justify-center border-b border-border bg-card">
        <h1 className="text-xl font-semibold text-foreground">Ledger</h1>
      </header>

      {/* Filter Bar */}
      <div className="p-4 bg-card border-b border-border space-y-3">
        <div className="flex gap-2">
          <button className="h-9 px-4 rounded-xl border-2 border-primary text-primary font-medium text-sm">
            All Accounts
          </button>
          <button className="h-9 px-4 rounded-xl border border-border text-muted-foreground font-medium text-sm">
            Feb 2026
            <ChevronDown size={16} className="inline ml-1" />
          </button>
          <button className="h-9 w-9 rounded-xl border border-border text-muted-foreground flex items-center justify-center">
            <Filter size={16} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-11 pl-10 pr-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Transaction List */}
      <div className="pb-4">
        {groupedTransactions.map((group) => (
          <div key={group.dateGroup}>
            <div className="px-6 pt-4 pb-2">
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                {group.dateGroup}
              </div>
            </div>
            <div className="bg-card">
              {group.transactions.map((transaction, index) => (
                <TransactionRow
                  key={transaction.id}
                  id={transaction.id}
                  amount={transaction.amount}
                  counterparty={transaction.counterparty}
                  date={transaction.date}
                  confidence={transaction.confidence}
                  isMerged={transaction.isMerged}
                  showDivider={index !== group.transactions.length - 1}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
