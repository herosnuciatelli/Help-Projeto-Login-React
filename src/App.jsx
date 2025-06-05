import { useState } from "react";
import "./App.css";
import { AppHeader } from "./components/AppHeader";
import { AppFooter } from "./components/AppFooter";
import { AppContent } from "./components/AppContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </>
  );
}

export default App;
