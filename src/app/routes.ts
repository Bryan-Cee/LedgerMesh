import { createBrowserRouter } from "react-router";
import { Dashboard } from "./screens/Dashboard";
import { Ledger } from "./screens/Ledger";
import { TransactionDetail } from "./screens/TransactionDetail";
import { ImportCenter } from "./screens/ImportCenter";
import { Analytics } from "./screens/Analytics";
import { Review } from "./screens/Review";
import { Settings } from "./screens/Settings";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "ledger", Component: Ledger },
      { path: "transaction/:id", Component: TransactionDetail },
      { path: "import", Component: ImportCenter },
      { path: "analytics", Component: Analytics },
      { path: "review", Component: Review },
      { path: "settings", Component: Settings },
    ],
  },
]);