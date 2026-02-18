import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { mockCategories } from "../data/mockData";

export function Analytics() {
  const spendingTrend = [
    { month: "Oct", amount: 1450 },
    { month: "Nov", amount: 1680 },
    { month: "Dec", amount: 2100 },
    { month: "Jan", amount: 1820 },
    { month: "Feb", amount: 1526 },
  ];

  const expenseCategories = mockCategories
    .filter((c) => c.amount < 0)
    .map((c) => ({
      name: c.name,
      value: Math.abs(c.amount),
      color: c.color,
    }));

  const totalIncome = mockCategories
    .filter((c) => c.amount > 0)
    .reduce((sum, c) => sum + c.amount, 0);
  const totalExpenses = mockCategories
    .filter((c) => c.amount < 0)
    .reduce((sum, c) => sum + Math.abs(c.amount), 0);
  const netCashflow = totalIncome - totalExpenses;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="h-14 px-6 flex items-center justify-center border-b border-border bg-card">
        <h1 className="text-xl font-semibold text-foreground">Analytics</h1>
      </header>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Month Selector */}
        <div className="flex items-center justify-between">
          <button className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-accent transition-colors">
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <div className="text-lg font-semibold text-foreground">
            February 2026
          </div>
          <button className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-accent transition-colors">
            <ChevronRight size={20} className="text-foreground" />
          </button>
        </div>

        {/* Cashflow Summary Card */}
        <div className="bg-card rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-semibold text-foreground mb-4">
            Cashflow Summary
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total Income</span>
              <span className="text-base font-semibold text-success">
                +${totalIncome.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total Expenses</span>
              <span className="text-base font-semibold text-destructive">
                -${totalExpenses.toFixed(2)}
              </span>
            </div>
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <span className="text-base font-semibold text-foreground">
                Net Cashflow
              </span>
              <span
                className={`text-xl font-bold ${
                  netCashflow >= 0 ? "text-success" : "text-destructive"
                }`}
              >
                {netCashflow >= 0 ? "+" : ""}${Math.abs(netCashflow).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Spending Trend */}
        <div className="bg-card rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-semibold text-foreground mb-4">
            Spending Trend
          </h3>
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={spendingTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis
                  dataKey="month"
                  stroke="#475569"
                  style={{ fontSize: "12px" }}
                />
                <YAxis stroke="#475569" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#1E3A8A"
                  strokeWidth={2}
                  dot={{ fill: "#1E3A8A", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="bg-card rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-semibold text-foreground mb-4">
            Expense Distribution
          </h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseCategories}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {expenseCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {expenseCategories.map((category) => (
              <div key={category.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="text-sm text-foreground">{category.name}</span>
                </div>
                <span className="text-sm font-semibold text-foreground">
                  ${category.value.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
