import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Header from "./components/layout/Header";
import { Outlet } from "react-router-dom";

function App() {
  const [msg, setMsg] = useState(null);
  // const url = import.meta.env.VITE_BACKEND_URI;
  // useEffect(() => {
  //   fetch(url)
  //   .then((res) => console.info(res.json()))
  //   .catch((err) => console.log(err.message));
  // },[]);
  return (
    <>
      {/* Header */}
      <div className="sticky z-100 top-0 left-0 right-0">
        <Header />
      </div>
      {/* <Dashboard /> */}
      <Outlet />
    </>
  );
}

export default App;
