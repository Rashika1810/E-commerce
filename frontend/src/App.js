import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-16 bg-white min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
