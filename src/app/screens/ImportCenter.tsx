import { MessageSquare, FileText, Table, CheckCircle, XCircle } from "lucide-react";

export function ImportCenter() {
  const recentImports = [
    {
      id: "1",
      type: "SMS",
      date: "Feb 18, 2026",
      count: 12,
      status: "success" as const,
    },
    {
      id: "2",
      type: "PDF",
      date: "Feb 15, 2026",
      count: 3,
      status: "success" as const,
    },
    {
      id: "3",
      type: "CSV",
      date: "Feb 1, 2026",
      count: 47,
      status: "success" as const,
    },
    {
      id: "4",
      type: "PDF",
      date: "Jan 28, 2026",
      count: 0,
      status: "error" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="h-14 px-6 flex items-center justify-center border-b border-border bg-card">
        <h1 className="text-xl font-semibold text-foreground">Import Center</h1>
      </header>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Import Action Cards */}
        <div className="space-y-4">
          <button className="w-full bg-card rounded-2xl p-4 shadow-sm border border-border hover:border-primary hover:shadow-md transition-all flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MessageSquare size={24} className="text-primary" />
            </div>
            <div className="flex-1">
              <div className="text-base font-medium text-foreground">
                Read SMS Messages
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Import transaction notifications from SMS
              </div>
            </div>
          </button>

          <button className="w-full bg-card rounded-2xl p-4 shadow-sm border border-border hover:border-primary hover:shadow-md transition-all flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center flex-shrink-0">
              <FileText size={24} className="text-warning" />
            </div>
            <div className="flex-1">
              <div className="text-base font-medium text-foreground">
                Import PDF Statements
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Upload bank statements and receipts
              </div>
            </div>
          </button>

          <button className="w-full bg-card rounded-2xl p-4 shadow-sm border border-border hover:border-primary hover:shadow-md transition-all flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
              <Table size={24} className="text-success" />
            </div>
            <div className="flex-1">
              <div className="text-base font-medium text-foreground">
                Import CSV File
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Upload transaction exports from your bank
              </div>
            </div>
          </button>
        </div>

        {/* Recent Imports */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Recent Imports
          </h2>
          <div className="space-y-3">
            {recentImports.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-xl p-4 border border-border"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        item.status === "success"
                          ? "bg-success/10"
                          : "bg-destructive/10"
                      }`}
                    >
                      {item.status === "success" ? (
                        <CheckCircle size={20} className="text-success" />
                      ) : (
                        <XCircle size={20} className="text-destructive" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {item.type} Import
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {item.date}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    {item.status === "success" ? (
                      <div className="text-sm font-semibold text-foreground">
                        {item.count} transactions
                      </div>
                    ) : (
                      <div className="text-xs text-destructive font-medium">
                        Failed
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
          <div className="text-sm text-foreground">
            <strong>Tip:</strong> Enable automatic SMS reading in Settings for
            real-time transaction detection.
          </div>
        </div>
      </div>
    </div>
  );
}
