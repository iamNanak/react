import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import authService from "./appwrite/auth";
import "./App.css";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/index";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-gray-100">
        {" "}
        {/* This will give the main content a light background */}
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          {/* TODO: Dynamic content */}
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="spinner-border animate-spin text-blue-500" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default App;
