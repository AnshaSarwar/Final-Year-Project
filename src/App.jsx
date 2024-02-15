import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth} from "@/layouts";
import BooksList from "./pages/dashboard/bookslist";
import ViewChat from "./pages/dashboard/viewchat";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/dashboard/bookslist" element={<BooksList />} />
      <Route path="/dashboard/viewchat" element={<ViewChat />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />

    </Routes>
  );
}

export default App;
