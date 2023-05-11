import { redirect } from "react-router-dom";
import { deleteItem } from "../libs/helpers";

export async function logoutAction() {
  deleteItem({
    key: "userName",
  });
  return redirect("/");
}
