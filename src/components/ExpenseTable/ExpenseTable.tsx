import { EXPENSE_TABLE_CATEGORIES } from "../constants/constants";
import { Expense } from "../types/types";
import styles from "./ExpenseTable.module.css";

type ExpenseTableProps = {
  data: Expense[];
};

const ExpenseTable = (props: ExpenseTableProps) => {
  const { data } = props;
  return data ? (
    <table className={styles["table"]}>
      <tr>
        {EXPENSE_TABLE_CATEGORIES.map((category) => {
          return <th className={styles["table-"]}>{category}</th>;
        })}
      </tr>
      {data.map((expense) => {
        return (
          <tr>
            <td>{expense.date}</td>
            <td>{expense.merchant}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>{expense.description}</td>
            <td>{expense.status}</td>
          </tr>
        );
      })}
    </table>
  ) : null;
};

export default ExpenseTable;
