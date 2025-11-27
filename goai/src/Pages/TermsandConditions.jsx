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
              Please review the following terms carefully. By purchasing or
              accessing GO AI services, you agree to comply with these
              conditions.
              <br />
              <span className="fw-bold">Last Updated: November 25, 2025</span>
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="terms-content text-white">
            These Purchase Terms and Conditions (the “Agreement”) govern the
            purchase and use of products and subscriptions offered by GO AI, LLC
            (the “Company,” “we,” “us,” or “our”) via this website (the
            “Website”). By completing a purchase, creating an account, or
            checking the “I have read and AGREE” box at checkout or enrollment,
            you acknowledge that you have read, understood, and agree to be
            bound by this Agreement, together with our Back Office Website
            Terms, Privacy Policy, and Policies and Procedures (collectively,
            the “Company Documents”). If you do not agree to all of the terms in
            this Agreement, you must not complete your purchase or use the
            services.
            <h3 className="terms-heading mt-5">
              Products, Subscriptions & Auto-Renewal
            </h3>
            <p>
              All products and services offered by the Company are subject to
              availability. Many of the Company’s products and services are
              digital in nature and are only accessible via the back-office
              website provided to you upon successful enrollment. All
              subscriptions will automatically renew at the end of each billing
              period unless canceled before the renewal date. All initial
              purchase and subscription renewal credit card statements will
              display the descriptor: “GO AI” (or a substantially similar
              descriptor).
            </p>
            <h3 className="terms-heading mt-5">Subscription Renewals</h3>
            <p>
              There will be NO REFUNDS for subscription renewals that have not
              been canceled at least three (3) days before the renewal date. You
              are solely responsible for managing your subscription and ensuring
              cancellation occurs within the required time frame
            </p>
            <h3 className="terms-heading mt-5">Initial Purchases.</h3>
            <p>
              NO REFUNDS of initial purchases will be made, except when
              requested within seven (7) days of the initial purchase date by
              written notice to GO AI via email, ticket, or Live Chat.
            </p>
            <h3 className="terms-heading mt-5">
              Notice of Right to Cancel (Initial Transaction)
            </h3>
            <p>
              You may CANCEL your INITIAL transaction, without any penalty or
              obligation, within seven (7) days from the Order Date. Upon
              canceling your initial purchase, any payments made by you under
              the initial contract or sale, and any negotiable instrument
              executed by you, will be returned within fourteen (14) business
              days following receipt by the Company of your cancellation notice,
              and any security interest arising out of the transaction will be
              canceled. To cancel this transaction, you must submit your
              cancellation request through the member support ticketing system
              or via email to support@goai.global NO LATER THAN MIDNIGHT of the
              seventh (7th) day following the Order Date..
            </p>
            <h3 className="terms-heading mt-5">Subscription Grace Period</h3>
            <p>
              Each GO AI subscription has a 48-hour billing grace period. Access
              to the subscription will continue during these 48 hours unless
              payment is not completed before the end of this period. If billing
              information is not updated and the order is not processed within
              48 hours, the subscription will be canceled, and access will be
              rescinded. To regain access, you may need to reorder under the
              then-current pricing and terms.
            </p>
            <h3 className="terms-heading mt-5">
              Termination Due to Inactivity
            </h3>
            <p>
              If an account has had no valid subscription payments for a period
              of six (6) months, the account will be considered terminated. To
              reorder, you will need to submit a new order and pay any
              applicable registration or access fee to GO AI, then in effect.
            </p>
            <h3 className="terms-heading mt-5">ELIGIBILITY</h3>
            <p>
              By using this Website, creating an account, or making a purchase,
              you represent and warrant that you are at least 18 years of age
              (or the age of majority in your jurisdiction) and have the legal
              capacity to enter into this Agreement. You agree that you are
              using the products and services for your own personal or business
              use and not on behalf of any third party unless expressly
              authorized.
            </p>
            <h3 className="terms-heading mt-5">
              ACCOUNT REGISTRATION & SECURITY
            </h3>
            <p>
              You may be required to create an account to access certain
              products or services, including digital back-office content. You
              agree to provide accurate, current, and complete information
              during registration and to keep such information updated. You are
              responsible for maintaining the confidentiality of your login
              credentials and for all activities that occur under your account.
              You agree to notify the Company immediately of any unauthorized
              use of your account or any other breach of security. The Company
              is not liable for any loss or damage arising from your failure to
              safeguard your login credentials.
            </p>
            <h3 className="terms-heading mt-5">
              PRICING, PAYMENTS & BILLING AUTHORIZATION
            </h3>
            <p>
              All prices are listed in U.S. dollars unless otherwise stated and
              are subject to change at any time without notice (except where
              prohibited by law). By submitting an order, you authorize the
              Company and its payment processors to charge the payment method
              you provide for the total amount of your order, including any
              applicable taxes, fees, and recurring subscription charges. You
              represent and warrant that you are authorized to use the payment
              method you provide. Taxes, duties, and similar governmental
              charges may be added based on your billing address or as required
              by applicable law.
            </p>
            <h3 className="terms-heading mt-5">
              Consent to Electronic Agreement & Communications
            </h3>
            <p>
              By selecting the “I have read and AGREE” option on the enrollment
              or checkout page, you indicate your consent to the terms of this
              Agreement and confirm that you are able to access all of the terms
              of this Agreement electronically. You agree that all agreements,
              notices, disclosures, and other communications that we provide to
              you electronically (via email, back-office notifications, or on
              our Website) satisfy any legal requirement that such
              communications be in writing.
            </p>
            <h3 className="terms-heading mt-5">
              Use of Services & Digital Content
            </h3>
            <p>
              By using the purchased services, including any software and
              content contained therein (the “Service”), you agree that use of
              the Service is entirely at your own risk. You understand and
              acknowledge that most of the Company’s products and services are
              digital and are only accessible via the back-office website
              provided to you upon successful enrollment. Access to such digital
              content is contingent on your maintaining an active account and,
              where applicable, a current subscription in good standing. You are
              granted a limited, non-exclusive, non-transferable, revocable
              license to access and use the Service for your personal or
              internal business use only, subject to this Agreement.
            </p>
            <h3 className="terms-heading mt-5">
              No Investment Advice & Trading Risks
            </h3>
            <p>
              The Company is not a registered investment advisor, broker-dealer,
              or financial planner. You understand and acknowledge that there is
              a very high degree of risk involved in trading securities and
              currencies, including but not limited to foreign exchange (Forex)
              markets. Past results published on this Website are not indicative
              of future returns and do not guarantee any particular outcome that
              may be realized by you. The Company assumes no responsibility or
              liability for your trading and investment results. The indicators,
              strategies, columns, articles, webinars, chat rooms, software
              tools, and all other features of our services (collectively, the
              “Information”) are provided for informational and educational
              purposes only and should not be construed as investment advice or
              a solicitation to buy or sell any financial instrument. Experts,
              employees, contractors, or affiliates of the Company may hold
              positions in the equities or currencies discussed. You should not
              rely solely on the Information when making any investment
              decision. Instead, you should use the Information only as a
              starting point for your own independent research, which should
              include consultation with your own qualified financial, tax, and
              legal advisors. Factual statements on this Website or in any other
              communication are made as of the date stated and are subject to
              change without notice. By using the Information, research, and
              educational materials provided, you assume full responsibility for
              any and all results (positive or negative) suffered or incurred,
              including but not limited to: financial gains or losses, emotional
              or psychological distress, opportunity cost, and time. The Company
              does not guarantee the accuracy, completeness, or timeliness of
              the Information, does not give investment advice, and does not
              advocate the purchase or sale of any specific security, currency,
              or other investment. The Information is not intended to provide
              tax, legal, or investment advice, which you should obtain from
              your own professional advisor before making any investment of the
              type discussed.
            </p>
            <h3 className="terms-heading mt-5">Disclaimer of Warranties</h3>
            <p>
              THE SERVICE, THE WEBSITE, AND ALL INFORMATION, CONTENT, AND
              PRODUCTS PROVIDED BY THE COMPANY ARE PROVIDED “AS IS” AND “AS
              AVAILABLE”, WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR
              IMPLIED. WITHOUT LIMITATION, THE COMPANY AND ITS AFFILIATES
              EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES, INCLUDING, BUT NOT
              LIMITED TO:
            </p>
            <ul>
              <li>
                (a) ANY WARRANTIES CONCERNING THE AVAILABILITY, ACCURACY,
                RELIABILITY, COMPLETENESS, USEFULNESS, OR CONTENT OF
                INFORMATION, PRODUCTS, OR SERVICES; AND
              </li>
              <li>
                (b) ANY WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY,
                OR FITNESS FOR A PARTICULAR PURPOSE. THIS DISCLAIMER OF
                LIABILITY APPLIES TO ANY DAMAGES OR INJURY CAUSED BY ANY FAILURE
                OF PERFORMANCE, ERROR, OMISSION, INTERRUPTION, DELETION, DEFECT,
                DELAY IN OPERATION OR TRANSMISSION, COMPUTER VIRUS,
                COMMUNICATION LINE FAILURE, THEFT OR DESTRUCTION, OR
                UNAUTHORIZED ACCESS TO, ALTERATION OF, OR USE OF RECORD, WHETHER
                FOR BREACH OF CONTRACT, TORT, NEGLIGENCE, OR ANY OTHER CAUSE OF
                ACTION.
              </li>
            </ul>
            <h3 className="terms-heading mt-5">Limitation of Liability</h3>
            <p>
              NEITHER THE COMPANY NOR ANY OF ITS EMPLOYEES, AGENTS, SUCCESSORS,
              ASSIGNS, AFFILIATES, OR CONTENT OR SERVICE PROVIDERS SHALL BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES OF ANY KIND
              (INCLUDING, WITHOUT LIMITATION, LOST PROFITS, TRADING LOSSES, OR
              LOST DATA) ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF, OR
              INABILITY TO USE, THE SERVICE OR THE WEBSITE, EVEN IF THE COMPANY
              HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. BECAUSE SOME
              STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR
              CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT
              APPLY TO YOU. IN SUCH STATES, THE COMPANY’S LIABILITY SHALL BE
              LIMITED TO THE GREATEST EXTENT PERMITTED BY APPLICABLE LAW.
            </p>
            <h3 className="terms-heading mt-5">INDEMNIFICATION</h3>
            <p>
              You agree to indemnify, defend, and hold harmless the Company and
              its officers, directors, employees, agents, affiliates, licensors,
              and service providers from and against any and all claims,
              liabilities, damages, judgments, awards, losses, costs, expenses,
              or fees (including reasonable attorneys’ fees) arising out of or
              related to: (a) your use of the Website, the Service, or the
              Information; (b) your violation of this Agreement or any
              applicable law; or (c) your infringement or misappropriation of
              any intellectual property or other rights of any third party.
            </p>
            <h3 className="terms-heading mt-5">Intellectual Property</h3>
            <p>
              The Company is the owner and/or authorized user of any trademark,
              registered trademark, and/or service mark appearing on the
              Company’s websites and is the copyright owner or licensee of the
              content and/or information on the Website, unless otherwise
              indicated. The Company does not grant you any license to any
              content, features, software, or materials you may access on this
              Website, except as expressly stated in this Agreement. You may not
              download, reproduce, distribute, modify, create derivative works
              of, publicly display, publicly perform, republish, store, or
              transmit any of the material on our Website, except: As otherwise
              permitted by these Terms and Conditions; or For a single copy that
              you may print for your own personal, non-commercial use or
              records. Any other use of the Website content may violate
              copyright, trademark, and other laws of the United States and
              other countries and may subject you to liability. We do not grant
              any license or authorization to any user of our trademarks,
              registered trademarks, service marks, copyrighted material, or any
              other intellectual property by including them on this Website.
            </p>
            <h3 className="terms-heading mt-5">PROHIBITED USES</h3>
            <p>
              You agree not to use the Website, the Service, or any Information:
              (a) for any unlawful purpose; (b) to solicit others to perform or
              participate in any unlawful acts; (c) to infringe upon or violate
              our intellectual property rights or the intellectual property
              rights of others; (d) to upload or transmit viruses or any other
              type of malicious code; (e) to collect or track the personal
              information of others without consent; (f) to spam, phish, or
              scrape; or (g) in any way that could disable, overburden, damage,
              or impair the Website or interfere with any other party’s use of
              the Website or Service. We reserve the right to terminate or
              suspend your access to the Service for any violation of this
              section.
            </p>
            <h3 className="terms-heading mt-5">THIRD-PARTY SERVICES & LINKS</h3>
            <p>
              The Website and Service may contain links to, or integrations
              with, third-party websites, tools, or services that are not owned
              or controlled by the Company. The Company is not responsible for
              the content, policies, or practices of any third-party sites or
              services and does not endorse or assume any responsibility for
              them. Your use of third-party sites or services is at your own
              risk and is subject to the terms and policies of those third
              parties.
            </p>
            <h3 className="terms-heading mt-5">
              GOVERNING LAW & DISPUTE RESOLUTION
            </h3>
            <p>
              This Agreement and any disputes arising out of or related to it,
              the Website, or the Service shall be governed by and construed in
              accordance with the laws of the State of Wyoming, without giving
              effect to any choice or conflict of law provision or rule. You
              agree that any legal suit, action, or proceeding arising out of or
              related to this Agreement shall be instituted exclusively in the
              state or federal courts located in Sheridan County, Wyoming, and
              you hereby consent to the personal jurisdiction and venue of such
              courts
            </p>
            <h3 className="terms-heading mt-5">CHANGES TO TERMS</h3>
            <p>
              We may revise and update this Agreement from time to time in our
              sole discretion. All changes are effective when posted on the
              Website, unless otherwise required by law. Your continued use of
              the Website, products, or services following the posting of
              revised terms means that you accept and agree to the changes.
            </p>
            <h3 className="terms-heading mt-5">
              MISCELLANEOUS (SEVERABILITY, WAIVER, ENTIRE AGREEMENT)
            </h3>
            <p>
              If any provision of this Agreement is held to be invalid or
              unenforceable, such provision shall be enforced to the maximum
              extent permissible, and the remaining provisions shall remain in
              full force and effect. No waiver by the Company of any term or
              condition set forth in this Agreement shall be deemed a further or
              continuing waiver of such term or any other term. This Agreement,
              together with the Company Documents referenced herein, constitutes
              the entire agreement between you and the Company with respect to
              your purchases and use of the Service and supersedes all prior or
              contemporaneous agreements, understandings, or representations.
            </p>
            <h3 className="terms-heading mt-5">Acknowledgment</h3>
            <p>
              DISCLAIMER: GO AI, LLC (THE "COMPANY") PURCHASE TERMS AND
              CONDITIONS IS A LEGAL AGREEMENT BETWEEN YOU AND THE COMPANY. THE
              COMPANY IS WILLING TO EXTEND TO YOU THE RIGHTS AND BENEFITS
              OUTLINED IN THE AGREEMENT ONLY UPON THE CONDITION THAT YOU ACCEPT
              ALL OF THE TERMS CONTAINED IN THIS AGREEMENT, INCLUDING THE
              AGREEMENT TERMS AND CONDITIONS, THE BACK OFFICE WEBSITE AND
              PRIVACY POLICY, AND THE POLICIES AND PROCEDURES. IN ORDER TO
              COMPLETE THE ENROLLMENT OR CHECKOUT PROCESS, YOU MUST INDICATE
              THAT YOU HAVE READ AND AGREE TO ABIDE BY THE TERMS CONTAINED IN
              THESE DOCUMENTS, INCLUDING THE COMPANY’S RETURN AND REFUND POLICY,
              BY SELECTING THE “I HAVE READ AND AGREE” OPTION.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
