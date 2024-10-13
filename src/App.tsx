//Start - 13:50

/**
 * Further improvements: 
 * 1. Add try-catch for fetching expenses to handle non 200 response code
 * 2. Add tests for util functions
 * Refine styling to be responsive
 */

import Header from "./components/Header/Header";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";
import getData from "./utils/getData";
import { useEffect, useState } from "react";
import { formatCurrency, formatDateString } from "./utils/utils";
import { Expense, ExpenseResponse } from "./components/types/types";

function App() {
  const [data, setData] = useState<Expense[]>([]);
  useEffect(() => {
    const fetchExpenses = async () => {
      const expenseData = await getData();
      const formattedData = expenseData.map((expense: ExpenseResponse) => {
        return {
          id: expense.id ?? "",
          date: formatDateString(expense.date) ?? "",
          merchant: expense.merchant ?? "",
          description: expense.description ?? "",
          category: expense.category ?? "",
          amount: formatCurrency(expense.amount, "en-GB", "GBP") ?? "",
          status: expense.status ?? "",
        };
      });

      setData((previousData) => [...previousData, ...formattedData]);
    };

    // Fetch data if it hasn't been fetched yet - assuming the data will not change for this example
    if (!data.length) fetchExpenses();
  }, []);

  return (
    <div id="template-text">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          height: "100%",
          width: "100%",
        }}
      >
        <Header text={"Expenses"} />
        <hr style={{ width: "100%", marginBottom: "2rem" }} />
        <ExpenseTable data={data} />
      </div>
    </div>
  );
}

export default App;
