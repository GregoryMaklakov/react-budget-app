import { redirect } from "react-router-dom";
import { deleteItem } from "../libs/helpers";
import { toast } from "react-toastify";

export async function logoutAction() {
  const keysToDelete = ["userName", "budgets", "expenses"];

  keysToDelete.forEach((key) => {
    deleteItem({ key });
  });

  toast.success("You've deleted your account!");
  return redirect("/");
}
