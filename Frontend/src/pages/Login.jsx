import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { Navigate } from "react-router-dom";
import { useState } from "react";
 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      try {
        setLoading(true);
        await login(dispatch, { email: email.trim(), password: password.trim() });
        setLoading(false);
      } catch (err) {
        console.error("Login error:", err);
        setLoading(false);
      }
    } else {
      alert("Please fill in both email and password.");
    }
  };

  if (user?.currentUser) {
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-red-500 text-white font-bold rounded-md transition-transform duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transform hover:scale-105"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
            {error && (
              <span className="text-red-500 text-sm">
                Please ensure that your email and password are entered correctly. Try again.
              </span>
            )}
          </form>
          <div className="mt-4 text-sm text-gray-600">
            <span>Don’t have an account? </span>
            <a href="/signup" className="text-red-500 hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
