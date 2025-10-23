import { useState } from "react";
import "../styles/SignUpComp.css";
import axios from "axios";

export default function SignUpComp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newUser = {
      userFirstName: firstName,
      userLastName: lastName,
      userEmail: email,
    };
    console.log(firstName, lastName, email);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users",
        newUser
      );
      console.log("User registered successfully:", response.data);
      // Optionally, reset the form fields
      setFirstName("");
      setLastName("");
      setEmail("");
    } catch (error) {
      console.log("Error registering user:", error);
    }
  };

  return (
    <section className="signup">
      <div className="container">
        <div className="signup-wrapper">
          <div className="intro-text">
            <h1>Investment Academy</h1>
            <h4>Currencies. Stocks. Commodities. Indexes.</h4>
            <p>
              Thousands of people around the world earn money in financial
              markets, but consistent results depend on knowledge, discipline
              and the right skills. Our training shows how markets work, how to
              analyze opportunities and manage risk responsibly. Join us to
              build the mindset and skills to pursue your financial goals.
            </p>
            <p>
              Join our live webinar to explore the financial markets and see how
              our Investment Academy guides learners of all levels.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <h1>Sign up now</h1>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Create Your Free Account</button>
            </div>
            <div className="policy-confirm">
              <p>
                By registering and creating an account, you confirm that you
                have read and agreed to our Terms and Conditions, Privacy Policy
                and Cookie Policy. Additionally, you acknowledge that this
                website operates exclusively as a marketing platform.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
