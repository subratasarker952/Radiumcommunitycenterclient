import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Shared/Header/Header";
import Loading from "./Components/Shared/Loading/Loading";
import useAuth from "./Components/hooks/useAuth";
import { Toaster } from "react-hot-toast";

function App() {
  const { userLoading } = useAuth();
  if (userLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div className="min-h-screen bg-slate-200">
        <div className="sticky top-0 z-50 ">
        <Header />
        </div>
        <Outlet />
      </div>
      <Toaster/>
    </>
  );
}

export default App;
