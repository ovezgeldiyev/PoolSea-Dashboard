import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./base/Sidebar";
import Home from "./dashboard/Home";
import Stake from "./dashboard/Stake";
import Swap from "./dashboard/Swap";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <main className="dashboard">
      <Sidebar active={sidebar} setActive={setSidebar} />
      <Routes>
        <Route
          path="/"
          index
          element={<Home sidebar={sidebar} setSidebar={setSidebar} />}
        />
        <Route
          path="/stake"
          element={<Stake sidebar={sidebar} setSidebar={setSidebar} />}
        />
        <Route
          path="/swap"
          element={<Swap sidebar={sidebar} setSidebar={setSidebar} />}
        />
      </Routes>
    </main>
  );
}

export default App;
