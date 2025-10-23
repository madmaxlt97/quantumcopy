import "../styles/Warning.css";
import logo from "../images/logo_on_gray.png";
import { Link } from "react-router-dom";

export default function Warning() {
  return (
    <section className="warning">
      <div className="container">
        <div className="warning-grid">
          <div className="left-warning-text">
            <a href="#">
              <img src={logo} alt="" />
            </a>
            <p>
              HIGH RISK WARNING: Dealing or Trading FX, CFDs and
              Cryptocurrencies is highly speculative, carries a level of
              non-negligible risk and may not be suitable for all investors. You
              may lose some or all of your invested capital, therefore you
              should not speculate with capital that you cannot afford to lose.
              Please refer to the risk disclosure below. Quantum AI does not
              gain or lose profits based on your activity and operates as a
              services company. Quantum AI is not a financial services firm and
              is not eligible of providing financial advice. Therefore, Quantum
              AI shall not be liable for any losses occurred via or in relation
              to this informational website.
            </p>
            <p>
              SITE RISK DISCLOSURE: Quantum AI does not accept any liability for
              loss or damage as a result of reliance on the information
              contained within this website; this includes education material,
              price quotes and charts, and analysis. Please be aware of and seek
              professional advice for the risks associated with trading the
              financial markets; never invest more money than you can risk
              losing. The risks involved in FX, CFDs and Cryptocurrencies may
              not be suitable for all investors. Quantum AI doesn't retain
              responsibility for any trading losses you might face as a result
              of using or inferring from the data hosted on this site.
            </p>
            <p>
              LEGAL RESTRICTIONS: Without limiting the above mentioned
              provisions, you understand that laws regarding financial
              activities vary throughout the world, and it is your
              responsibility to make sure you properly comply with any law,
              regulation or guideline in your country of residence regarding the
              use of the Site. To avoid any doubt, the ability to access our
              Site does not necessarily mean that our Services and/or your
              activities through the Site are legal under the laws, regulations
              or directives relevant to your country of residence. It is against
              the law to solicit US individuals to buy and sell commodity
              options, even if they are called "prediction" contracts, unless
              they are listed for trading and traded on a CFTC-registered
              exchange unless legally exempt. The UK Financial Conduct Authority
              has issued a policy statement PS20/10, which prohibits the sale,
              promotion, and distribution of CFD on Crypto assets. It prohibits
              the dissemination of marketing materials relating to distribution
              of CFDs and other financial products based on Cryptocurrencies
              that addressed to UK residents. The provision of trading services
              involving any MiFID II financial instruments is prohibited in the
              EU, unless when authorized/licensed by the applicable authorities
              and/or regulator(s). Please note that we may receive advertising
              fees for users opted to open an account with our partner
              advertisers via advertisers\' websites. We have placed cookies on
              your computer to help improve your experience when visiting this
              website. You can change cookie settings on your computer at any
              time. Use of this website indicates your acceptance of this
              website.
            </p>
            <p>
              Please be advised that the names depicted on our website,
              including but not limited to Quantum AI, are strictly for
              marketing and illustrative purposes. These names do not represent
              or imply the existence of specific entities, service providers, or
              any real-life individuals. Furthermore, the pictures and/or videos
              presented on our website are purely promotional in nature and
              feature professional actors. These actors are not actual users,
              clients, or traders, and their depictions should not be
              interpreted as endorsements or representations of real-life
              experiences. All content is intended solely for illustrative
              purposes and should not be construed as factual or as forming any
              legally binding relationship.
            </p>
          </div>
          <div className="right-side-nav">
            <div className="company-container">
              <h4>Company</h4>
              <Link to="/about">About</Link>
              <Link to="/team">Team</Link>
              <Link to="/careers">Careers</Link>
            </div>
            <div className="policies-container">
              <h4>Policies</h4>
              <a href="#">Privacy policy</a>
              <a href="#">Cookie policy</a>
              <a href="#">Terms of use</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
