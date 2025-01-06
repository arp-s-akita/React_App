import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// ページコンポーネントをインポート
import { HomePage } from "./pages/HomePage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductDetailsPage" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
