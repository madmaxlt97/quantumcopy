import member from "../../images/member_img.jpg";
import "../../styles/TeamPageStyles/Members.css";

export default function Team() {
  return (
    <section className="team">
      <h1>Meet our Team</h1>
      <p>
        We are a group of passionate individuals dedicated to revolutionizing
        the way people invest their money for brighter future.
      </p>
      <p>
        Every member of our community is highly-experienced professional and has
        his name valued in investment's world.
      </p>
      <div className="team-members">
        <div className="member">
          <img src={member} alt="Member 1" />
          <h2>Michael Johnson</h2>
          <p>CEO & Co-Founder</p>
        </div>
        <div className="member">
          <img src={member} alt="Member 2" />
          <h2>Michael B. Jordan</h2>
          <p>CTO & Co-Founder</p>
        </div>
        <div className="member">
          <img src={member} alt="Member 3" />
          <h2>Michael Jordan</h2>
          <p>Lead Developer</p>
        </div>
        <div className="member">
          <img src={member} alt="Member 4" />
          <h2>Michael Jackson</h2>
          <p>Head of Marketing</p>
        </div>
      </div>
    </section>
  );
}
