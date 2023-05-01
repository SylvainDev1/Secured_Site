import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import RecoveryPage from "./routes/RecoveryPage";
import CloudPage from "./routes/CloudPage";
import ContactPage from "./routes/ContactPage";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/recovery", element: <RecoveryPage /> },
  { path: "/cloud", element: <CloudPage /> },
  { path: "/contact", element: <ContactPage /> },
]);
