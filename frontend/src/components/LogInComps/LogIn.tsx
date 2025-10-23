import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/LogInPageStyles/styles.css";

export default function LogIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        userName: userName,
        password: password,
      });

      if (response.status === 200) {
        navigate("/dashboard");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("An error occurred during login. Please try again.");
      console.log("Login failed", error);
    }
  };

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <h2>Admin Log In</h2>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Log In</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </form>
    </section>
  );
}
