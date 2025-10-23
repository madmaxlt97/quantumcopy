import "../../styles/CareerPageStyles/Career.css";

export default function CareerForm() {
  return (
    <>
      <section className="career">
        <section className="career-intro">
          <h1>We're Hiring!</h1>
          <p>
            Join our dynamic team at QuantumCopy and help us revolutionize the
            way people invest money for a brighter future. We are looking for
            passionate individuals who are eager to make a difference in the
            investment world.
          </p>
        </section>
        <form>
          <section className="career-form">
            <h2>Apply Now</h2>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="Email" required />
            <button>Start working</button>
          </section>
          <div className="policy-confirm">
            <p>
              By registering and creating an account, you confirm that you have
              read and agreed to our Terms and Conditions, Privacy Policy and
              Cookie Policy. Additionally, you acknowledge that this website
              operates exclusively as a marketing platform.
            </p>
          </div>
        </form>
      </section>
    </>
  );
}
