import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user.currentUser);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      try {
        setLoading(true);
        await login(dispatch, { email, password });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error("Login failed:", err);
      }
    }
  };

  // Redirect if the user is already logged in
  if (user) {
    return <Navigate to="/admin" />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="h-[500px] w-[500px] transition-transform duration-700 ease-in-out transform hover:scale-105">
          <img
            src="/hero1.jpg"
            alt="Login"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="p-10 w-[500px]">
          <h2 className="text-3xl font-bold text-gray-700 mb-5">Login</h2>
          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="example@example.com"
                onChange={(e) => setEmail(e.target.value.trim())}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value.trim())}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-red-500 text-white font-bold rounded-md transition-transform duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transform hover:scale-105"
            >
              {loading ? "Loading..." : "Login"}
            </button>
            {error && (
              <span className="text-red-500">
                Please ensure your email and password are correct. Double-check
                your credentials and try again.
              </span>
            )}
          </form>
          <div className="mt-4 text-sm text-gray-600">
            <span>Don’t have an account? </span>
            <a href="#" className="text-red-500 hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
