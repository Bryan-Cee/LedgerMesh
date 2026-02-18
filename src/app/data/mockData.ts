export interface Transaction {
  id: string;
  amount: number;
  counterparty: string;
  date: string;
  dateGroup: string;
  confidence: "high" | "medium" | "low";
  confidenceScore: number;
  isMerged: boolean;
  category: string;
  reference?: string;
  observations: Observation[];
}

export interface Observation {
  id: string;
  source: "SMS" | "PDF" | "CSV";
  timestamp: string;
  reference: string;
  rawSnippet: string;
  amount: number;
}

export interface Category {
  name: string;
  amount: number;
  color: string;
}

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    amount: -87.50,
    counterparty: "Whole Foods Market",
    date: "Feb 18",
    dateGroup: "Today",
    confidence: "high",
    confidenceScore: 98,
    isMerged: true,
    category: "Groceries",
    reference: "TXN-87234",
    observations: [
      {
        id: "o1",
        source: "SMS",
        timestamp: "Feb 18, 2:34 PM",
        reference: "TXN-87234",
        rawSnippet: "Your card ending 4532 was charged $87.50 at WHOLE FOODS MKT",
        amount: -87.50,
      },
      {
        id: "o2",
        source: "PDF",
        timestamp: "Feb 18, 2:35 PM",
        reference: "87234",
        rawSnippet: "WHOLE FOODS MARKET - Purchase - $87.50",
        amount: -87.50,
      },
    ],
  },
  {
    id: "2",
    amount: 2850.00,
    counterparty: "Acme Corp (Salary)",
    date: "Feb 15",
    dateGroup: "This Week",
    confidence: "high",
    confidenceScore: 100,
    isMerged: true,
    category: "Income",
    reference: "SAL-02-2026",
    observations: [
      {
        id: "o3",
        source: "CSV",
        timestamp: "Feb 15, 8:00 AM",
        reference: "SAL-02-2026",
        rawSnippet: "Direct Deposit, ACME CORP, +2850.00",
        amount: 2850.00,
      },
    ],
  },
  {
    id: "3",
    amount: -45.00,
    counterparty: "Electric Company",
    date: "Feb 14",
    dateGroup: "This Week",
    confidence: "medium",
    confidenceScore: 72,
    isMerged: false,
    category: "Utilities",
    reference: "BILL-8734",
    observations: [
      {
        id: "o4",
        source: "SMS",
        timestamp: "Feb 14, 9:12 AM",
        reference: "BILL-8734",
        rawSnippet: "Payment of $45.00 to ELECTRIC CO processed",
        amount: -45.00,
      },
    ],
  },
  {
    id: "4",
    amount: -120.00,
    counterparty: "Joe's Garage",
    date: "Feb 13",
    dateGroup: "This Week",
    confidence: "low",
    confidenceScore: 58,
    isMerged: false,
    category: "Auto",
    reference: "INV-5621",
    observations: [
      {
        id: "o5",
        source: "PDF",
        timestamp: "Feb 13, 4:45 PM",
        reference: "INV-5621",
        rawSnippet: "Oil change service - $120.00 - Joe's Auto",
        amount: -120.00,
      },
    ],
  },
  {
    id: "5",
    amount: -23.50,
    counterparty: "Coffee Shop",
    date: "Feb 12",
    dateGroup: "This Week",
    confidence: "high",
    confidenceScore: 95,
    isMerged: true,
    category: "Dining",
    reference: "POS-9234",
    observations: [
      {
        id: "o6",
        source: "SMS",
        timestamp: "Feb 12, 8:23 AM",
        reference: "POS-9234",
        rawSnippet: "Card purchase $23.50 at COFFEE SHOP DOWNTOWN",
        amount: -23.50,
      },
    ],
  },
  {
    id: "6",
    amount: -1250.00,
    counterparty: "Oak Street Apartments",
    date: "Feb 1",
    dateGroup: "Earlier This Month",
    confidence: "high",
    confidenceScore: 100,
    isMerged: true,
    category: "Housing",
    reference: "RENT-02-2026",
    observations: [
      {
        id: "o7",
        source: "CSV",
        timestamp: "Feb 1, 12:00 AM",
        reference: "RENT-02-2026",
        rawSnippet: "ACH Payment - OAK ST APTS - Rent - $1250.00",
        amount: -1250.00,
      },
    ],
  },
];

export const mockCategories: Category[] = [
  { name: "Income", amount: 2850.00, color: "#16A34A" },
  { name: "Housing", amount: -1250.00, color: "#1E3A8A" },
  { name: "Groceries", amount: -287.50, color: "#D97706" },
  { name: "Utilities", amount: -145.00, color: "#DC2626" },
  { name: "Dining", amount: -123.50, color: "#475569" },
  { name: "Auto", amount: -220.00, color: "#8B5CF6" },
];

export function getTransactionById(id: string): Transaction | undefined {
  return mockTransactions.find((t) => t.id === id);
}

export function getTransactionsByConfidence(confidence: "high" | "medium" | "low"): Transaction[] {
  return mockTransactions.filter((t) => t.confidence === confidence);
}

export function getLowConfidenceTransactions(): Transaction[] {
  return mockTransactions.filter((t) => t.confidenceScore < 75);
}
