import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import Main, { mainLoader } from "./layouts/Main";
import { logoutAction } from "./actions/logout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ExpensePage, { expensesAction, expensesLoader } from "./pages/ExpensePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        action: dashboardAction,
        loader: dashboardLoader,
        errorElement: <Error />
      },
      {
        path: "expenses",
        element: <ExpensePage />,
        loader: expensesLoader,
        action: expensesAction,
      },
      {
        path: "logout",
        action: logoutAction,
      }
    ]
  },
]);

function App() {
  return <div className="App">
    <RouterProvider router={router} />
    <ToastContainer />
  </div>
}

export default App
