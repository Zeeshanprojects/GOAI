import { useEffect } from "react";
import AOS from "aos";
import "./TermsandCondition.css";
import "aos/dist/aos.css";

export default function TermsandConditions() {
  useEffect(() => {
    document.title = "Terms and Conditions | GO AI";
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
            <h1 className="title">Terms & Conditions</h1>
            <p className="payment-subtext ">
              GO AI, LLC – Unified Website Terms, Purchase Terms &
              Communications Policy
              <br />
              <span className="fw-bold">Last Updated: November 25, 2025</span>
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="terms-content text-white">
            These Terms and Conditions (the “Agreement”) govern your access to
            and use of the websites, back-office, apps, software, products,
            services, content, and subscriptions provided by GO AI, LLC (the
            “Company,” “GO AI,” “we,” “us,” or “our”) including, without
            limitation, goai.global, any related domains, and any back-office or
            member areas (collectively, the “Website” or “Services”). By
            completing a purchase, creating an account, accessing the Website,
            or checking the “I have read and AGREE” box at checkout or
            enrollment, you acknowledge that you have read, understood, and
            agree to be bound by this Agreement and all policies referenced in
            it, including our Privacy Policy, Policies and Procedures, and any
            applicable Back Office terms (collectively, the “Company
            Documents”). If you do not agree to all of the terms in this
            Agreement, you must not complete your purchase or use the Services.
            <h3 className="terms-heading mt-5">
              Who We Are (No Investment Advice)
            </h3>
            <p>
              GO AI, LLC is an e-commerce company providing subscription-based
              educational software and services, including tools and resources
              related to trading and financial markets. We do not provide
              investment, legal, medical, or other professional advice, and we
              do not guarantee any particular results or outcomes. The
              indicators, strategies, articles, webinars, chat rooms, software
              tools, and other features of our Services (collectively, the
              “Information”) are provided for informational and educational
              purposes only and must not be construed as investment advice, a
              recommendation, or a solicitation to buy or sell any security,
              currency, or other financial instrument. You are solely
              responsible for your trading and investment decisions and should
              consult your own qualified financial, tax, and legal advisors
              before making any investment
            </p>
            <h3 className="terms-heading mt-5">2. Eligibility</h3>
            <p>
              By using the Website, creating an account, or making a purchase,
              you represent and warrant that:
              <ul>
                <li>
                  You are at least 18 years of age (or the age of majority in
                  your jurisdiction);
                </li>
                <li>
                  You have the legal capacity and authority to enter into this
                  Agreement
                </li>
                <li>
                  You will use the Services only in compliance with this
                  Agreement and all applicable laws and regulations.
                </li>
              </ul>
            </p>
            <h3 className="terms-heading mt-5">
              3. Account Registration & Security
            </h3>
            <p>
              You may be required to create an account to access certain
              products or Services, including digital back-office content. You
              agree to:
              <ul>
                <li>
                  Provide accurate, current, and complete registration
                  information;
                </li>
                <li>Keep your information updated;</li>
                <li>Maintain the confidentiality of your login credentials;</li>
                <li>
                  Be responsible for all activities that occur under your
                  account
                </li>
                <li>
                  Notify us immediately of any unauthorized use or suspected
                  breach of security.
                </li>
              </ul>
              If your plan allows team or multi-user access, you are responsible
              for ensuring that all users comply with this Agreement. We are not
              liable for any loss or damage arising from your failure to
              safeguard your login credentials.
            </p>
            <h3 className="terms-heading mt-5">
              4. Products, Subscriptions & Auto-Renewal
            </h3>
            <ol>
              <li>
                <h5>Products & Availability.</h5>
                <p>
                  {" "}
                  All products and Services offered by the Company (including
                  digital content, software, training, and subscriptions) are
                  subject to availability. Many of our products and Services are
                  digital in nature and accessible only via the back-office or
                  member Website provided upon successful enrollment.
                </p>
              </li>
              <li>
                <h5>Subscription Plans & Auto-Renewal.</h5>
                <ul>
                  <li>
                    <p>
                      All subscriptions and paid plans automatically renew at
                      the end of each billing period unless you cancel before
                      the renewal date.
                    </p>
                  </li>
                  <li>
                    <p>
                      By subscribing, you authorize us and our payment
                      processors to charge your payment method on a recurring
                      basis for the applicable fees, taxes, and any other
                      charges.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h5>Trials & Promotions</h5>
                <p>
                  Trial offers and promotions, if any, are subject to their
                  stated terms. Some trials may convert to paid subscriptions
                  unless you cancel before the end of the trial period.
                </p>
              </li>
              <li>
                <h5>Subscription Grace Period.</h5>
                <p>
                  Each GO AI subscription includes a 48-hour billing grace
                  period. Access continues during those 48 hours. If billing is
                  not completed and payment is not processed within that period,
                  your subscription may be canceled, and access rescinded.
                </p>
              </li>
              <li>
                <h5>Termination Due to Inactivity</h5>
                <p>
                  If your account has no valid subscription payments for six (6)
                  months, the account may be considered terminated. To regain
                  access later, you may need to submit a new order under
                  then-current pricing and terms
                </p>
              </li>
            </ol>
            <h3 className="terms-heading mt-5">
              5. Pricing, Payments & Billing Authorization
            </h3>
            <ul>
              <li>
                <p>
                  All prices are listed in U.S. dollars unless otherwise noted
                  and may be changed prospectively at any time, where permitted
                  by law.
                </p>
              </li>
              <li>
                By submitting an order, you authorize the Company and its
                payment processors to charge your payment method for the full
                amount due, including applicable taxes and recurring
                subscription charges.
              </li>
              <li>
                You represent that you are authorized to use the payment method
                provided.
              </li>
              <li>
                Taxes, duties, and governmental charges may be added based on
                your billing address or as required by law.
              </li>
            </ul>
            <h3 className="terms-heading mt-5">
              6. Refunds, Cancellations & Chargebacks
            </h3>
            <p>
              To the extent of any inconsistency, the specific purchase terms in
              this Section 6 control over more general billing terms elsewhere.
            </p>
            <ol>
              <li>
                <h5>Subscription Renewals – No Refunds.</h5>
                <p>
                  There will be NO REFUNDS for subscription renewals that have
                  not been canceled at least three (3) days before the renewal
                  date. You are solely responsible for managing your
                  subscription and ensuring timely cancellation.
                </p>
              </li>
              <li>
                <h5>Initial Purchases – 7-Day Refund Window.</h5>
                <p>
                  For initial purchases, NO REFUNDS will be made except when a
                  refund is requested within seven (7) days of the initial
                  purchase date by written notice to GO AI via email, support
                  ticket, or Live Chat.
                </p>
              </li>
              <li>
                <h5>Notice of Right to Cancel (Initial Transaction).</h5>
                <p>
                  You may cancel your initial transaction, without penalty or
                  obligation, within seven (7) days from the order date. Upon
                  canceling:
                  <ul>
                    <li>
                      <p>
                        Any payments you made under the initial contract or sale
                        will be returned within fourteen (14) business days
                        after we receive your cancellation notice; and
                      </p>
                      <p>
                        Any security interest arising out of the transaction
                        will be canceled.
                      </p>
                    </li>
                  </ul>
                </p>
              </li>
              <li>
                <h5>Cancellation</h5>
                <p>
                  To cancel, submit your request via the member support
                  ticketing system or email support@goai.global no later than
                  midnight of the seventh (7th) day following the order date.
                </p>
              </li>
              <li>
                <h5>General Refund Rule.</h5>
                <p>
                  {" "}
                  Except as expressly provided above or where required by law or
                  a posted written guarantee, all fees are non-refundable, and
                  no credits are provided for partial billing periods.
                </p>
              </li>
              <li>
                <h5>Chargebacks.</h5>
                <p>
                  {" "}
                  Filing chargebacks for valid, authorized charges may result in
                  suspension or termination of your access. Please contact us
                  first to attempt to resolve any billing concerns.
                </p>
              </li>
              <li>
                <h5>Billing Descriptor.</h5>
                <p>
                  All initial purchase and subscription renewal credit card
                  statements will typically show a descriptor such as “GO AI”
                  (or substantially similar).
                </p>
              </li>
            </ol>
            <h3 className="terms-heading mt-5">
              7. Consent to Electronic Agreement & Communications
            </h3>
            <p>
              By selecting the “I have read and AGREE” option on the enrollment
              or checkout page,
            </p>
            <ul>
              <li>
                <p>
                  Consent to this Agreement and confirm that you can access it
                  electronically;
                </p>
              </li>
              <li>
                <p>
                  Agree to receive communication from us electronically (email,
                  in-app, back-office, or Website notifications)
                </p>
              </li>
              <li>
                <p>
                  Acknowledge that such electronic communications satisfy any
                  legal requirement that communications be in writing.
                </p>
              </li>
            </ul>
            <p>
              See also the Communications & Anti-Spam section below for details
              about marketing messages and opt-out rights.
            </p>
            <h3 className="terms-heading mt-5">
              8. License to Use the Services & Software
            </h3>
            <p>
              Subject to your compliance with this Agreement and timely payment
              of applicable fees, GO AI grants you a limited, non-exclusive,
              non-transferable, revocable license to
            </p>
            <ul>
              <li>
                <p>
                  Access and use the Website and Services for your personal or
                  internal business educational purposes
                </p>
              </li>
              <li>
                <p>
                  Use any software, tools, dashboards, or digital content
                  included in your subscription solely for your own use and not
                  for resale or redistribution.
                </p>
              </li>
            </ul>
            <p>You agree you will not:</p>
            <ul>
              <li>
                <p>
                  Copy, modify, or create derivative works of the Services or
                  software;
                </p>
              </li>
              <li>
                <p>
                  Reverse engineer, decompile, or attempt to extract source code
                  except as permitted by law;
                </p>
              </li>
              <li>
                <p>Circumvent security or access controls;</p>
              </li>
              <li>
                <p>
                  Resell, sublicense, or provide the Services as a service
                  bureau;
                </p>
              </li>
              <li>
                <p>Use the Services to build competing products;</p>
              </li>
              <li>
                <p>Overload, scrape, or disrupt the Services;</p>
              </li>
              <li>
                Use the Services for any unlawful, harmful, or prohibited purpos
              </li>
            </ul>
            <h3 className="terms-heading mt-5">9. Your Content & AI Outputs</h3>
            <ol>
              <li>
                <h5>Your Content.</h5>
                <p>
                  {" "}
                  You retain ownership of content you upload, submit, or
                  otherwise provide to the Services (“Your Content”). You grant
                  us a worldwide, non-exclusive license to host, store, process,
                  transmit, display, and reproduce Your Content as necessary to:
                  <ul>
                    <li>
                      <p>Provide and improve the Services;</p>
                    </li>
                    <li>
                      <p>Comply with law; and</p>
                    </li>
                    <li>
                      <p>Enforce this Agreement and our policies.</p>
                    </li>
                  </ul>
                </p>
              </li>
              <li>
                <h5>AI Features & Outputs.</h5>
                <p>
                  Some features may generate AI-powered outputs (“Outputs”)
                  based on prompts or data you supply. Subject to third-party
                  rights and this Agreement, you may use Outputs for lawful
                  purposes. You are responsible for evaluating Outputs and for
                  how you use them.
                </p>
              </li>
              <li>
                <h5>Model Training.</h5>
                <p>
                  {" "}
                  By default, GO AI does not use Your Content to train
                  foundation models unless you opt in, as described in our
                  Privacy Policy or product-specific notices.
                </p>
              </li>
              <li>
                <h5>Prohibited Content.</h5>
                <p>
                  {" "}
                  You may not submit or use the Services to create content that
                  is illegal, infringing, defamatory, harassing, hateful,
                  exploitative, or otherwise prohibited by this Agreement or
                  applicable law. You must have all necessary rights and
                  consents for Your Content.
                </p>
              </li>
            </ol>
            <h3 className="terms-heading mt-5">
              10. Acceptable Use & Prohibited Activities
            </h3>
            <p>You agree not to use the Website or Services to:</p>
            <ul>
              <li>
                <p>
                  Violate any law, regulation, or third-party rights (including
                  IP and privacy rights);
                </p>
              </li>
              <li>
                <p>Upload or transmit viruses, malware, or harmful code;</p>
              </li>
              <li>
                <p>
                  Access or attempt to access others’ accounts or data without
                  authorization;
                </p>
              </li>
              <li>
                <p>
                  Interfere with or disrupt the integrity or performance of the
                  Services;
                </p>
              </li>
              <li>
                <p>
                  Collect or track personal data about others without consent;
                </p>
              </li>
              <li>
                <p>
                  Spam, phish, scrape, or engage in deceptive or fraudulent
                  practices;
                </p>
              </li>
              <li>
                <p>
                  Misrepresent your affiliation with GO AI or any other entity
                </p>
              </li>
              <li>
                <p>
                  Use the Services in a way that could disable, overburden,
                  damage, or impair our infrastructure.
                </p>
              </li>
            </ul>
            We may investigate suspected violations, and we reserve the right to
            suspend or terminate access for any violation of this Agreement.
            <h3 className="terms-heading mt-5">
              11. No Investment Advice & Trading Risks (Reaffirmed)
            </h3>
            <p>
              There is a very high degree of risk involved in trading securities
              and currencies, including foreign exchange (Forex). Past
              performance is not indicative of future results and does not
              guarantee any outcome.
            </p>
            <p>By using our Information and Services, you agree that:</p>
            <ul>
              <li>
                <p>
                  You assume full responsibility for all trading decisions and
                  results (positive or negative), including financial gains or
                  losses, emotional or psychological impacts, and opportunity
                  costs;
                </p>
              </li>
              <li>
                <p>
                  GO AI does not guarantee the accuracy, completeness, or
                  timeliness of any Information;{" "}
                </p>
              </li>
              <li>
                <p>
                  You will not hold GO AI liable for your trading results or any
                  reliance you place on the Information.
                </p>
              </li>
            </ul>
            <h3 className="terms-heading mt-5">12. Intellectual Property</h3>
            <p>
              The Company (and its licensors, where applicable) owns all rights,
              title, and interest in and to the Services, including software,
              UI/UX, databases, documentation, site content, trademarks, service
              marks, logos, and trade dress. Except as expressly provided in
              this Agreement, you are not granted any license or rights to our
              intellectual property. You may only:
              <ul>
                <li>
                  <p>
                    Print a single copy of content for your personal,
                    non-commercial use;
                  </p>
                </li>
                <li>
                  <p>
                    Use the Services in accordance with the license granted
                    above.
                  </p>
                </li>
              </ul>
              <p>
                Any other copying, reproduction, distribution, modification, or
                public display of our content or marks is prohibited.
              </p>
            </p>
            <h3 className="terms-heading mt-5">
              13. Third-Party Services & Links
            </h3>
            <p>
              The Website and Services may contain links to or integrations with
              third-party websites, tools, or services (e.g., payment
              processors, analytics, communication platforms). GO AI does not
              control and is not responsible for:
            </p>
            <ul>
              <li>
                <p>
                  The content, policies, or practices of any third-party site or
                  service; or
                </p>
                <li>
                  <p>
                    Any loss or damage arising from your use of third-party
                    services.
                  </p>
                </li>
              </li>
            </ul>
            Your use of third-party services is at your own risk and subject to
            their own terms and privacy policies.
            <ul></ul>
            <h3 className="terms-heading mt-5">
              14. Availability, Support & Updates
            </h3>
            <p>
              We strive for high availability but do not guarantee
              uninterrupted, error-free, or fully secure operation of the
              Services. From time to time, we may:
            </p>
            <ul>
              <li>
                <p>Modify, update, or discontinue features;</p>
              </li>
              <li>
                <p>
                  Release beta or pre-release features “as is” that may be less
                  reliable; and
                </p>
              </li>
              <li>
                <p>
                  Offer support as described on our Website, plan descriptions,
                  or support documentation.
                </p>
              </li>
            </ul>
            <h3 className="terms-heading mt-5">15. Confidentiality</h3>
            <p>
              Where either party receives non-public information from the other
              that is marked or reasonably understood as confidential
              (“Confidential Information”), each party agrees to:
            </p>
            <ul>
              <li>
                <p>
                  Use such information solely for providing or receiving the
                  Services; and
                </p>
              </li>
              <li>
                <p>Protect it with reasonable care.</p>
              </li>
            </ul>
            This does not restrict disclosures required by law or court order.
            <h3 className="terms-heading mt-5">16. Privacy</h3>
            <p>
              Please review our Privacy Policy for information about how we
              collect, use, and protect personal data. By using the Services,
              you consent to our data practices described there.
            </p>
            <h3 className="terms-heading mt-5">
              17. Communications & Anti-Spam Policy
            </h3>
            <p>
              This section incorporates our Spam Policy and applies to all
              communications we send, and to communications sent on our behalf
              by employees, contractors, resellers, affiliates, and partners.
            </p>
            <ul>
              <li>
                <h5> Our Commitment</h5>
                <p>
                  We do not tolerate unsolicited or abusive messaging. All
                  outreach must comply with applicable laws and industry
                  standards, including, where applicable:
                </p>
                <ul>
                  <li>
                    <p>U.S. CAN-SPAM Act;</p>
                  </li>
                  <li>
                    <p>Telephone Consumer Protection Act (TCPA);</p>
                  </li>
                  <li>
                    <p>CTIA guidelines for SMS;</p>
                  </li>
                  <li>
                    <p>State “Do Not Call” rules; and</p>
                  </li>
                  <li>
                    <p>
                      International laws such as CASL (Canada) and GDPR/ePrivacy
                      (EU/UK) for consent and opt-out practices.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h5> Consent & Opt-in</h5>
                <p>
                  All marketing messages (email, SMS/MMS, push notifications,
                  DMs, etc.) must be sent only to recipients who have provided
                  valid, provable consent or where there is a legitimate
                  interest and compliant opt-out mechanism. Examples:
                </p>
                <ul>
                  <li>
                    <p>
                      Email: We document signup source, timestamp, and (when
                      available) IP. We recommend double opt-in for higher-risk
                      or cold acquisition funnels.
                    </p>
                  </li>
                  <li>
                    <p>
                      SMS/MMS: Prior express written consent is required,
                      including clear terms, message frequency, “STOP to end,
                      HELP for help,” and notice that message/data rates may
                      apply.
                    </p>
                  </li>
                  <li>
                    <p>
                      Transactional Messages: Password resets, receipts, and
                      other strictly non-promotional messages may be sent as
                      necessary to service your account, but they must remain
                      non-promotional.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h5> Required Message Content</h5>
                <p>Every marketing email we send will:</p>
                <ul>
                  <li>
                    <p>Use accurate “From,” “To,” and routing information;</p>
                  </li>
                  <li>
                    <p>Use a truthful subject line;</p>
                  </li>
                  <li>
                    <p>
                      Include our legal name and physical mailing address: GO
                      AI, LLC, 30 N Gould St. #57397, Sheridan, WY 82801; and
                    </p>
                  </li>
                  <li>
                    <p>
                      Include a visible, functional unsubscribe link that is
                      honored promptly.
                    </p>
                  </li>
                </ul>
                <p>
                  Every marketing SMS/MMS will identify “GO AI” and include
                  opt-out language (e.g., “Reply STOP to unsubscribe, HELP for
                  help”), message frequency disclosure, and applicable rate
                  notices.
                </p>
              </li>
              <li>
                <h5> Opt-Out / Unsubscribe Handling</h5>
                <ul>
                  <li>
                    <p>
                      Email: Opt-out requests are processed within 10 business
                      days and addresses are added to a suppression list to
                      prevent future marketing sends.
                    </p>
                  </li>
                  <li>
                    <p>
                      SMS/MMS: Opt-outs (e.g., STOP/UNSUBSCRIBE) are processed
                      as quickly as reasonably possible and recognized variants
                      are honored. We treat suppression lists as confidential
                      and use them only to comply with opt-outs.
                    </p>
                  </li>
                  <li>
                    <p>
                      We treat suppression lists as confidential and use them
                      only to comply with opt-outs.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h5>Affiliates, Resellers & Partners</h5>
                <p>
                  If you promote GO AI as an affiliate, reseller, or partner,
                  you must:
                </p>
                <ul>
                  <li>
                    <p>
                      Obtain and maintain compliant consent records for every
                      recipient you message about GO AI;
                    </p>
                  </li>
                  <li>
                    <p>
                      Use only approved brand assets and claims (no earnings
                      guarantees)
                    </p>
                  </li>
                  <li>
                    <p>
                      Include GO AI’s physical address and a compliant opt-out
                      in each marketing email and proper STOP/HELP language in
                      SMS;
                    </p>
                  </li>
                  <li>
                    <p>
                      Not present yourself as an employee or official agent of
                      GO AI without written authorization; and
                    </p>
                  </li>
                  <li>
                    <p>
                      Comply with our audits, remediation requests, and
                      suppression list rules.
                    </p>
                  </li>
                  <p>
                    Violations may result in suspension, termination, commission
                    forfeiture, and/or legal action.
                  </p>
                </ul>
              </li>
              <li>
                <h5>Reporting Spam or Abuse</h5>
                <p>
                  To report suspected spam or abuse related to GO AI, forward
                  the message (with full headers for email, or screenshots for
                  SMS/DM) to:
                </p>
                <ul>
                  <li>
                    <p>Email: support@goai.global and legal@goai.global</p>
                  </li>
                  <li>
                    <p>
                      Mail: GO AI, LLC, 30 N Gould St. #57397, Sheridan, WY
                      82801
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
            <h3 className="terms-heading mt-5">
              18. Compliance, Export & Sanctions
            </h3>
            <p>
              You represent that you are not subject to U.S. sanctions and will
              comply with applicable export controls and sanctions laws in
              connection with your use of the Services.
            </p>
            <h3 className="terms-heading mt-5">
              19. DMCA / Copyright Complaints
            </h3>
            <p>
              If you believe that any content on the Services infringes your
              copyright, please send a written notice to our DMCA Agent
              including:
            </p>
            <ol>
              <li>
                <p>Your physical or electronic signature;</p>
              </li>
              <li>
                <p>
                  Identification of the copyrighted work claimed to have been
                  infringed
                </p>
              </li>
              <li>
                <p>
                  Identification of the allegedly infringing material and
                  information reasonably sufficient to locate it;
                </p>
              </li>
              <li>
                <p>Your contact information;</p>
              </li>
              <li>
                <p>
                  A statement that you have a good-faith belief the use is not
                  authorized by the owner, its agent, or the law; and
                </p>
              </li>
              <li>
                <p>
                  A statement that the information in your notice is accurate
                  and, under penalty of perjury, that you are authorized to act
                  on behalf of the copyright owner.
                </p>
              </li>
            </ol>
            <h3 className="terms-heading mt-5">20.Disclaimers of Warranties</h3>
            <p>
              THE WEBSITE, SERVICES, SOFTWARE, INFORMATION, CONTENT, AND OUTPUTS
              ARE PROVIDED “AS IS” AND “AS AVAILABLE”, WITHOUT WARRANTY OF ANY
              KIND, EXPRESS OR IMPLIED. WITHOUT LIMITATION, GO AI AND ITS
              AFFILIATES DISCLAIM ALL WARRANTIES OF:
            </p>
            <ul>
              <li>
                <p>MERCHANTABILITY;</p>
              </li>
              <li>
                <p>FITNESS FOR A PARTICULAR PURPOSE;</p>
              </li>
              <li>
                <p>NON-INFRINGEMENT;</p>
              </li>
              <li>
                <p>TITLE; and</p>
              </li>
              <li>
                <p>
                  ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF
                  TRADE
                </p>
              </li>
            </ul>
            <p>
              We do not warrant that the Services will be uninterrupted, timely,
              secure, or error-free; that defects will be corrected; or that
              Outputs or Information will meet your needs or be accurate or
              complete. You are responsible for verifying and evaluating any
              Outputs or Information before relying on them.
            </p>{" "}
            <h3 className="terms-heading mt-5">21. Limitation of Liability</h3>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
            <ul>
              <li>
                <p>
                  GO AI AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS,
                  SUPPLIERS, AND LICENSORS WILL NOT BE LIABLE FOR ANY INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE
                  DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL,
                  OR BUSINESS INTERRUPTION, EVEN IF ADVISED OF THE POSSIBILITY
                  OF SUCH DAMAGES; AND
                </p>
              </li>
              <li>
                <p>
                  OUR TOTAL LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICES
                  WILL NOT EXCEED THE AMOUNTS PAID BY YOU TO GO AI FOR THE
                  SERVICES IN THE TWELVE (12) MONTHS BEFORE THE EVENT GIVING
                  RISE TO THE CLAIM.
                </p>
              </li>
            </ul>
            <p>
              Some jurisdictions do not allow certain limitations. In such
              cases, our liability will be limited to the greatest extent
              permitted by applicable law.
            </p>
            <h3 className="terms-heading mt-5">22. Indemnification</h3>
            <p>
              You agree to indemnify, defend, and hold harmless GO AI and its
              officers, directors, employees, agents, affiliates, licensors, and
              service providers from and against any and all claims, damages,
              losses, liabilities, costs, and expenses (including reasonable
              attorneys’ fees) arising from or related to:
            </p>
            <ul>
              <li>
                <p>Your use of the Website or Services;</p>
              </li>
              <li>
                <p>Your Content or Outputs;</p>
              </li>
              <li>
                <p>Your breach of this Agreement; or</p>
              </li>
              <li>
                <p>Your violation of law or any third-party rights.</p>
              </li>
            </ul>
            <h3 className="terms-heading mt-5">23. Termination & Suspension</h3>
            <p>
              You may stop using the Services at any time. We may suspend or
              terminate your access (with or without notice) if we believe you:
            </p>
            <ul>
              <li>
                <p>Violated this Agreement or any applicable law;</p>
              </li>
              <li>
                <p>Pose a security or legal risk; or</p>
              </li>
              <li>
                <p>Have unpaid fees or unresolved chargebacks.</p>
              </li>
            </ul>
            <p>Upon temination</p>
            <ul>
              <li>
                <p>Your license to use the Services ends; and</p>
              </li>
              <li>
                <p>
                  Sections that by their nature should survive (including but
                  not limited to IP, confidentiality, disclaimers, limits of
                  liability, indemnity, and dispute resolution) will survive.
                </p>
              </li>
            </ul>
            <h3 className="terms-heading mt-5">
              24. Governing Law & Dispute Resolution
            </h3>
            <ol>
              <li>
                <h5>Governing Law.</h5>
                <p>
                  {" "}
                  This Agreement and any disputes arising out of or related to
                  it, the Website, or the Services are governed by the laws of
                  the State of Wyoming, without giving effect to conflict-of-law
                  rules.
                </p>
              </li>
              <li>
                <h5>Arbitration & Class-Action Waiver.</h5>
                <p>
                  {" "}
                  Except where prohibited by law or where you opt out as
                  described below, any dispute arising out of or relating to
                  this Agreement or the Services will be resolved by binding
                  arbitration administered by the American Arbitration
                  Association (AAA) under its applicable rules, before a single
                  arbitrator in Sheridan County, Wyoming.
                </p>
                <ul>
                  <li>
                    <p>
                      The Federal Arbitration Act governs the interpretation and
                      enforceability of this arbitration agreement.
                    </p>
                  </li>
                  <li>
                    <p>
                      You and GO AI agree to bring claims only in your
                      individual capacities, not as a plaintiff or class member
                      in any class or representative action.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h5>Injunctive Relief.</h5>
                <p>
                  Either party may seek temporary or preliminary injunctive
                  relief in court to protect intellectual property or
                  confidential information.
                </p>
              </li>
              <li>
                <h5>Opt-Out.</h5>
                <p>
                  {" "}
                  You may opt out of the arbitration requirement (and
                  class-action waiver) by emailing legal@goai.global within 30
                  days of first accepting this Agreement. If you opt out, any
                  action must be brought exclusively in the state or federal
                  courts located in Sheridan County, Wyoming, and both parties
                  waive any right to a jury trial.
                </p>
              </li>
            </ol>
            <h3 className="terms-heading mt-5">
              25. Changes to the Services or This Agreement
            </h3>
            <p>
              We may revise and update this Agreement and/or update the Services
              from time to time. When we make material changes, we will provide
              notice (e.g., posting on the Website or sending an email).
              <br />
              Changes apply prospectively from the effective date stated in the
              notice. Your continued use of the Website or Services after the
              effective date constitutes acceptance of the revised terms.
            </p>
            <h3 className="terms-heading mt-5">26. Miscellaneous</h3>
            <ul>
              <li>
                <h5>Entire Agreement.</h5>
                <p>
                  {" "}
                  This Agreement, together with the Company Documents referenced
                  herein (including the Privacy Policy, Policies and Procedures,
                  and applicable Back Office terms), constitutes the entire
                  agreement between you and GO AI regarding your purchases and
                  use of the Services and supersedes all prior or
                  contemporaneous agreements.
                </p>
              </li>
              <li>
                <h5>Severability.</h5>
                <p>
                  {" "}
                  If any provision is held invalid or unenforceable, it will be
                  enforced to the maximum extent permissible, and the remaining
                  provisions will remain in full force and effect.
                </p>
              </li>
              <li>
                <h5>No Waiver.</h5>
                <p>
                  {" "}
                  Our failure to enforce any provision is not a waiver of that
                  or any other provision.
                </p>
              </li>
              <li>
                <h5>Assignment.</h5>
                <p>
                  {" "}
                  You may not assign or transfer this Agreement or your rights
                  or obligations without our prior written consent. We may
                  assign this Agreement to an affiliate or in connection with a
                  merger, acquisition, or sale of assets.
                </p>
              </li>
              <li>
                <h5>Force Majeure.</h5>
                <p>
                  {" "}
                  We are not liable for delays or failures caused by events
                  beyond our reasonable control, including outages, labor
                  disputes, acts of God, war, pandemics, or governmental
                  actions.
                </p>
              </li>
              <li>
                <h5>Order of Precedence.</h5>
                <p>
                  In the event of a conflict between specific purchase/refund
                  terms in Sections 4–6 and more general billing or usage terms
                  elsewhere, the specific purchase and refund terms in this
                  Agreement control.
                </p>
              </li>
            </ul>
            <h3 className="terms-heading mt-5">27. Contact Information</h3>
            <p>
              If you have questions about this Agreement or the Services, you
              may contact us at:
            </p>
            <ul>
              <li>
                <p> Support: support@goai.global</p>
              </li>
              <li>
                <p> Legal/DMCA: legal@goai.global</p>
              </li>
              <li>
                <p> Address: 30 N Gould St. #57397, Sheridan, WY 82801</p>
              </li>
              <li>
                <p> Phone: (770) 847-GOAI (4264)</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
