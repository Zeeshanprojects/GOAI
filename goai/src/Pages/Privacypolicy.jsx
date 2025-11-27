import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Privacypolicy() {
  useEffect(() => {
    document.title = "Privcy and Policy | GO AI";
    AOS.init({
      duration: 1200,
      offset: 120,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <section className="terms-section container-fluid">
        <div className="container terms-wrapper" data-aos="fade-up">
          {/* PAGE HEADER */}
          <div className="text-center">
            <h1 className="title">GO AI, LLC — Privacy Policy</h1>
            <p className="text-white">
              <span className="fw-bold">Last Updated: November 25, 2025</span>
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="terms-content text-white">
            <p>
              GO AI, LLC (“GO AI,” “we,” “us,” or “our”) recognizes and values
              the importance of your privacy. We want you to feel confident
              using our website, goai.global (the “Website”), and our education
              software and subscription services (collectively, the “Services”).
              This Privacy Policy (“Policy”) explains how we collect, use,
              disclose, and protect information about you.
            </p>
            <h3 className="terms-heading mt-5">INFORMATION WE COLLECT</h3>

            <p>
              We collect information about you directly from you and
              automatically through your use of the Website and Services. We may
              combine information collected automatically with other information
              we have about you, including information from publicly available
              sources and third parties (where legally permitted).
            </p>

            <ol>
              <li>
                <h5>Information You (and Others) Give Us</h5>
                <p>Examples include:</p>
                <ul>
                  <li>
                    <p>
                      <strong>Account & Profile Data</strong>. When you
                      register, you may provide your name, email address, phone
                      number, username, password, and other profile details.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Transaction & Billing Data.</strong> If you
                      purchase a subscription or other Services, we (or our
                      payment processors) collect payment method details and
                      billing/shipping/contact information, along with purchase
                      history.
                    </p>
                  </li>
                  <li>
                    <p>
                      s<strong>Communications & Preferences.</strong> When you
                      participate in surveys, polls, or support interactions, or
                      when you subscribe to newsletters/marketing
                      communications, we collect the information you provide and
                      your communication preferences.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Third-Party Sources.</strong> From time to time,
                      we may lawfully receive personal information about you
                      from third parties for our business purposes (for example,
                      to personalize content or promotions). We will only use
                      this information where the third party has your consent or
                      is otherwise legally permitted to share it with us.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h5> Information Collected Automatically</h5>
                When you access or use the Website, we may automatically
                collect:
                <ul>
                  <li>
                    <p>
                      <strong>Log & Device Data</strong>. IP address, device
                      identifiers, device model, operating system, browser type,
                      mobile network, time zone/approximate location,
                      referring/exit pages, and pages viewed/links clicked.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Cookies & Similar Technologies</strong> We use
                      cookies, web beacons, and similar tools to help operate
                      the Website, keep you signed in, remember your
                      preferences, analyze usage, and tailor marketing. Cookies
                      may be session (deleted when you close your browser) or
                      persistent (remain until deleted or expire). Some cookies
                      may be associated with your account.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Analytics</strong> We may use third-party
                      analytics and interaction tools to understand how visitors
                      use the Website and to improve quality and relevance.
                    </p>
                  </li>
                </ul>
                <p>
                  Note: Nothing in this Policy limits how we collect, use, or
                  process anonymous, de-identified, or aggregate information
                </p>
              </li>
            </ol>

            <h3 className="terms-heading mt-5">HOW WE USE YOUR INFORMATION</h3>
            <p>
              We may use information we collect about you, including personal
              information, to:
            </p>
            <ol>
              <li>
                <h5>Provide and Operate the Website and Services.</h5>
                <p>
                  {" "}
                  Managing accounts, authenticating users, providing customer
                  support, processing transactions, and enabling features you
                  request. We use billing data to notify you of charges, show
                  your billing history, and handle internal financial processes
                  (including charge verification in the event of a dispute).
                </p>
              </li>
              <li>
                <h5>Communicate About Products, Services, and Promotions.</h5>
                <p>
                  {" "}
                  Where permitted by law, we may send you updates, offers, and
                  tailored content based on your preferences. You can manage
                  marketing preferences at any time (see Your Rights and
                  Choices).
                </p>
              </li>
              <li>
                <h5>Operate, Improve, and Maintain Our Business.</h5>
                <p>
                  {" "}
                  Including troubleshooting, analytics, research, product
                  development, quality assurance, and enforcing our terms and
                  policies.
                </p>
              </li>
              <li>
                <h5>Legal, Compliance, and Protection.</h5>
                <p>
                  {" "}
                  Complying with laws and lawful requests; preventing fraud,
                  abuse, and security incidents; and protecting our rights,
                  property, users, and the public.
                </p>
              </li>
              <li>
                <h5>Other Purposes With Your Consent.</h5>
                <p>
                  {" "}
                  For any additional purposes disclosed to you at the time of
                  collection or otherwise with your consent.
                </p>
              </li>
            </ol>
            <h3 className="terms-heading mt-5">
              WITH WHOM WE SHARE YOUR INFORMATION
            </h3>
            <p>
              We do not sell your personal information for money or other
              valuable consideration. We share information only as described
              below or when we notify you and provide an opportunity to opt out
              (where required by law).
            </p>
            <ul>
              <li>
                <h5>Service Providers and Contractors.</h5>
                <p>
                  We engage companies and individuals to perform services on our
                  behalf—e.g., hosting, analytics, customer support,
                  communications, payment processing, and IT/security. These
                  parties may access personal information only as needed to
                  perform services for us and must take reasonable steps to
                  safeguard it.
                </p>
              </li>
              <li>
                <h5>Legal, Security, and Safety.</h5>
                <p>
                  We may share information to comply with law or legal process;
                  enforce our terms and policies; detect, investigate, and
                  prevent fraud, security, or technical issues; or protect the
                  rights, property, or safety of GO AI, our users, or the
                  public.
                </p>
              </li>
              <li>
                <h5>Business Transfers.</h5>
                <p>
                  {" "}
                  If we undergo a merger, acquisition, financing,
                  reorganization, bankruptcy, receivership, sale of assets, or
                  transition of service to another provider, your information
                  may be transferred as part of that transaction, subject to
                  applicable law.
                </p>
              </li>
            </ul>
            <h3 className="terms-heading mt-5">YOUR RIGHTS AND CHOICES</h3>
            <p>
              Depending on where you live, you may have certain rights under
              local data protection laws (e.g., GDPR/UK GDPR, CCPA/CPRA, and
              other U.S. state laws).
              <br /> <strong>Important:</strong> We honor rights to the extent
              they apply to you under applicable law. Please consult your local
              laws to determine which rights may be available and any
              limitations.
            </p>
            <ol>
              <h5>Examples of Rights That May Apply</h5>
              <ul>
                <li>
                  <p>
                    <strong>Access.</strong> Request confirmation that we
                    process your personal information and, if so, access to that
                    information.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Correction (Rectification).</strong> Request that we
                    correct inaccurate or incomplete personal information.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Deletion (Erasure).</strong> Request deletion of
                    some or all personal information, subject to legal
                    exceptions.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Restriction.</strong> Request that we restrict
                    processing in certain circumstances.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Objection.</strong> Object to certain processing,
                    including profiling/targeted advertising (where applicable).
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Portability.</strong> Receive a copy of certain
                    information in a machine-readable format and/or request we
                    transmit it to another controller (where technically
                    feasible).
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Consent Withdrawal.</strong> Withdraw consent where
                    processing is based on consent.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Right to Lodge a Complaint</strong> You may complain
                    to a supervisory authority/regulator if you are dissatisfied
                    with our response.
                  </p>
                </li>
              </ul>
            </ol>

            <h5>California (CCPA/CPRA) and U.S. State Notices</h5>
            <p>
              If you are a California resident (or a resident of a U.S. state
              with similar laws), you may have rights to know, access, correct,
              delete, and opt out of certain processing (e.g., “sales,”
              “sharing” for cross-context behavioral advertising, targeted
              advertising, or profiling for significant decisions). We do not
              sell personal information for money. To exercise rights, see How
              to Contact Us below.
            </p>

            <h5>evada Residents</h5>
            <p>
              Nevada residents may have the right to opt out of future “sales”
              of personal information as defined by Nevada law. See How to
              Contact Us.
            </p>
            <h5>EU/EEA/UK Residents</h5>
            <p>
              EU/EEA/UK residents may exercise rights as described above. We
              respond within one month (or as permitted by law). See How to
              Contact Us.
            </p>
            <h5>Marketing Preferences</h5>
            <p>You may opt out of marketing emails by using the “unsubscribe” link in the email or contacting us. You will still receive transactional or service-related messages.
</p>
          </div>
        </div>
      </section>
    </>
  );
}
