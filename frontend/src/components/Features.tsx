import { useNavigate } from "react-router-dom";
import "../styles/features.css";

export default function Features() {
  const navigate = useNavigate();

  return (
    <section className="features">
      <div className="container">
        <h3 className="mb-text">WHAT SETS US APART</h3>
        <h1 className="bb-text">
          Advance Your Trading Strategy with Quantum AI
        </h1>
        <div className="cards">
          <div className="card">
            <h2>User Friendly Interface</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              atque ipsa nulla incidunt ex quos blanditiis nisi molestiae ipsam
              animi.
            </p>
          </div>
          <div className="card">
            <h2>Automated Trading system</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio maxime sunt excepturi, fugiat similique consequatur
              deleniti facere possimus cum quam!
            </p>
          </div>
          <div className="card">
            <h2>Trusted Trading Space</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              tenetur excepturi ipsum voluptates tempora obcaecati illo,
              dignissimos vitae voluptate perspiciatis!
            </p>
          </div>
          <div className="card">
            <h2>Expert designed Strategies</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              ipsam sequi maiores dolores corporis eum. Neque eaque dolores odio
              similique.
            </p>
          </div>
          <div className="card">
            <h2>Risk Free demo mode</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              animi iusto totam at dolore similique odio sint consectetur eum
              quam?
            </p>
          </div>
          <div className="card">
            <h2>Top level security</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              nulla, esse ut facilis corporis impedit? Laudantium qui aliquid
              modi reiciendis.
            </p>
          </div>
        </div>
      </div>
      <button onClick={() => navigate("/signup")}>Get started</button>
    </section>
  );
}
