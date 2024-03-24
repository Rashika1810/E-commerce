import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="pt-16 bg-white min-h-[calc(100vh)]">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
