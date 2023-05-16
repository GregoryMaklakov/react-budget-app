import { toast } from "react-toastify";
import { deleteItem, getAllMatchingItems } from "../libs/helpers";
import { redirect } from "react-router-dom";

export function deleteBudget({ params }) {
  deleteItem({
    key: "budgets",
    id: params.id,
  });
  const associatedExpenses = getAllMatchingItems({
    category: "expenses",
    key: "budgetId",
    value: params.id,
  });
  associatedExpenses.forEach((expense) => {
    deleteItem({
      key: "expenses",
      id: expense.id,
    });
  });
  toast.success("Budget deleted successfully");
  return redirect("/");
}
