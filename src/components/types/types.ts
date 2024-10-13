type ExpenseResponse = {
  id: string;
  date: string;
  merchant: string;
  description: string;
  category: string;
  amount: number;
  status: string;
};

type Expense = Omit<ExpenseResponse, "amount"> & {
  amount: string;
};
export type { ExpenseResponse, Expense };
