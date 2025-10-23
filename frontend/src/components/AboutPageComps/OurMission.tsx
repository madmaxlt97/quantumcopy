import "../../styles/AboutPageStyles/OurMission.css";
import AboutPageImg from "../../images/about_page_img.jpg";

export default function OurMission() {
  return (
    <section className="our-mission">
      <div className="container">
        <div className="mission-wrapper">
          <div className="text-container">
            <h2>
              Our essence lies in our diverse, passionate team from across the
              globe, united by a vision to redefine the future of trading.
            </h2>
            <p>
              We’re committed to reshaping the trading landscape by harnessing
              the immense power of artificial intelligence. Our belief is that
              blending the insights of skilled traders with cutting-edge
              technological advancements enables us to offer a trading platform
              that stands out in terms of accuracy, speed, and profitability.
            </p>

            <p>
              Our global team contributes diverse perspectives, relentlessly
              innovating to integrate the latest in AI and financial trends into
              our platform. We’re driven by the synergy of human expertise and
              machine intelligence, striving to offer a groundbreaking trading
              experience.
            </p>
          </div>
          <div className="image-container">
            <img src={AboutPageImg} alt="computer" />
          </div>
        </div>
      </div>
    </section>
  );
}
