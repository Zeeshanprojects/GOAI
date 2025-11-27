import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function PoliciesandProcedures() {
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
          <div className="text-center">
            <h1 className="title">GO AI, LLC Policies & Procedures</h1>
            <p className="text-white">
              <span className="fw-bold">Last Updated: November 25, 2025</span>
            </p>
          </div>
          <h3 className="terms-heading mt-5">
            Who We Are (No Investment Advice)
          </h3>
          <ol>
            <li>
              <h5> Our Mission</h5>
              <p>
                {" "}
                Empower people with modern education, tools, and community to
                design, build, and protect their financial future.
              </p>
            </li>
            <li>
              <h5> Our Vision</h5>
              <p> A world where people have accessible paths to prosperity.</p>
            </li>
            <li>
              <h5> Our Brand Promise</h5>
              <p>
                We’re dedicated to changing lives through education, responsible
                innovation, and community. .
              </p>
            </li>
            <li>
              <h5> Core Values</h5>
              <p>
                The Right Way • Balance • Empowerment • Vitality •
                Affiliateships • Stewardship • Altruism{" "}
              </p>
            </li>
            <li>
              <h5>Brand Statement</h5>
              <p>
                “GO AI provides practical tools and training to help people
                build their legacy.”
              </p>
            </li>
            <li>
              <h5>Tagline</h5>
              <p> “Go Beyond”</p>
            </li>
          </ol>
          <h3 className="terms-heading mt-5">Introduction</h3>
          <ul>
            <li>
              <h5> Adherence to Terms & Code of Ethics</h5>
              <p>
                {" "}
                Affiliates must comply with these Policies & Procedures, the
                Affiliate Agreement, website terms, privacy policy, and
                applicable law.
              </p>
            </li>
            <li>
              <h5> Incorporated Documents</h5>
              <p>
                {" "}
                These Policies & Procedures, Agreement Terms & Conditions,
                Purchase Terms, Website & Privacy Policy, Compensation Plan, and
                any Business Entity paperwork are incorporated into the
                Affiliate Agreement.
              </p>
            </li>
            <li>
              <h5>Changes to the Agreement</h5>
              <p>
                {" "}
                GO AI may amend the Agreement and prices by posting updates
                online, by email, by back-office notices, or by special
                mailings. Continued participation or acceptance of commissions
                constitutes acceptance of changes (dispute-resolution terms
                require mutual consent)
              </p>
            </li>
            <li>
              <h5> Severability</h5>
              <p>
                {" "}
                If any provision is invalid, the remainder still applies; the
                provision will be reformed to reflect the intended purpose.
              </p>
            </li>
            <li>
              <h5>Waiver</h5>
              <p>
                {" "}
                Failure to enforce any provision is not a waiver of rights.
              </p>
            </li>
          </ul>{" "}
          <h3 className="terms-heading mt-5"> Becoming an Affiliate</h3>
          <p>
            Affiliates are independent contractors and must represent themselves
            as an “Independent GO AI Affiliate.” No one may imply employment or
            corporate office.
          </p>
          <ul>
            <li>
              <h5>Requirements</h5>
              <p>
                {" "}
                18+; reside in an open country; provide SSN/EIN before first
                qualified payout; pay any registration fee; submit a complete
                Affiliate Agreement. GO AI may accept/reject any application
              </p>
            </li>

            <li>
              <h5>Registration & Purchases</h5>
              <p>
                {" "}
                No product/service purchase is required to become an Affiliate
                beyond registration. The affiliate’s website, back office, and
                marketing materials are provided by the company.
              </p>
            </li>
            <li>
              <h5>Affiliate Benefits</h5>
              <p>
                {" "}
                Sell GO AI products/services; participate in the Compensation
                Plan; enroll Clients/Affiliates; receive communications and
                training; join promotions and incentives.
              </p>
            </li>
          </ul>
          <h3 className="terms-heading mt-5"> Operating Your Business</h3>
          <ul>
            <li>
              <h5>Adherence to the Compensation Plan</h5>
              <p>
                {" "}
                Use only official company methods and documents; do not tie the
                opportunity to other programs or require extraneous purchases.
              </p>
            </li>

            <li>
              <h5>Advertising (General)</h5>
              <p>
                All statements must be truthful, fair, and compliant; use
                company-approved materials or submit customs to
                legal@goai.global for approval. No selling sales aids to other
                Affiliates. GO AI may rescind approvals.
              </p>
            </li>
            <li>
              <h5>Trademarks & Copyrights</h5>
              <p>
                {" "}
                Company marks are proprietary; Affiliates may only use them as
                authorized. Never present company training or product content as
                your own or redistribute it. Use the “Independent GO AI
                Affiliate” identifier where appropriate.
              </p>
            </li>
            <li>
              <h5>Media Inquiries</h5>
              <p>
                {" "}
                Refer all media to legal@goai.global. Affiliates must not speak
                to the press on behalf of GO AI.
              </p>
            </li>
            <li>
              <h5>Unsolicited Email (CAN-SPAM)</h5>
              <p>
                {" "}
                Include a working reply address, opt-out notice, your physical
                mailing address, clear ad disclosure; honor opt-outs. No
                deceptive headers/subjects or third-party domains without
                permission.
              </p>
            </li>
            <li>
              <h5>Unsolicited Faxes</h5>
              <li>
                {" "}
                Not permitted except with prior permission or established
                relationship and where legal.
              </li>
            </li>
            <li>
              <h5>GO AI Affiliate</h5>
              <p>
                {" "}
                Directory listings must state “Independent GO AI Affiliate”;
                TV/radio require written approval; do not advertise below
                current online prices plus shipping/tax where applicable.
              </p>
            </li>
            <li>
              <h5>Online Conduct</h5>
              <p>
                {" "}
                Affiliate/External/Replicated sites must be accurate, compliant,
                and not deceptive (no “scam/fraud” baiting, spam linking, PPC
                misdirection, or unapproved banners). Replicated sites cannot be
                altered beyond allowed fields and may not promote non-company
                offers. Clearly show Independent Affiliate status and link to
                the corporate site. No ecommerce “stock-and-sell;” all orders
                must flow through official systems. Upon termination,
                remove/redirect sites within three days. Team sites must be
                private/approved. Domains/email/aliases cannot include company
                marks or cause confusion. Social media must be professional,
                compliant, and may not post performance returns; first offense
                warning, second $500 fine, third termination (GO AI may assess
                based on severity).
              </p>
            </li>
            <li>
              <h5>Business Entities</h5>
              <p>
                Business entities may enroll; all affiliated parties are
                jointly/severally liable. Notify GO AI of changes.
              </p>
            </li>
            <li>
              <h5>Unauthorized Claims & Actions</h5>
              <p>
                You are responsible for all non-official claims; indemnify GO AI
                for resulting losses. No product/market performance guarantees;
                do not share personal account performance as claims.
              </p>
            </li>
            <li>
              <h5> Compensation & Income Claims</h5>
              <p>
                Do not imply easy success; no
                projections/testimonials/checks/statements. Always provide the
                current Income Disclosure Statement when discussing the plan.
              </p>
            </li>

            <li>
              <h5> Commercial Outlets & Trade Shows</h5>
              <p>
                {" "}
                No selling on retail/e-commerce marketplaces (eBay, Amazon,
                etc.). Trade shows require prior written approval; generally one
                Affiliate per event.
              </p>
            </li>
          </ul>
          <li>
            <h5>Conflicts of Interest</h5>
            <p>
              Non-solicitation of GO AI Clients/Affiliates for competing offers
              during the Agreement and for 6 months post-termination (except
              personally enrolled). Participation in other programs must remain
              fully separate and compliant. Protect confidential information
              (back-office data and reports).
            </p>
          </li>
          <li>
            <h5>External Use Restriction</h5>
            <p>
              {" "}
              Do not use company products/services for external managed accounts
              or similar activities outside GO AI’s system; violations may incur
              fines and termination.
            </p>
          </li>
          <li>
            <h5>Software Settings Sharing</h5>
            <p>
              Use caution in sharing settings/configurations; never imply
              “official/approved” unless GO AI has published it. GO AI may
              withhold commissions, review/terminate accounts, or pursue legal
              action if sharing causes loss or risk. Questions to
              legal@goai.global.
            </p>
          </li>
          <li>
            <h5>Targeting Other Sellers</h5>
            <p>
              {" "}
              No poaching that violates another company’s terms. GO AI may take
              action and seek recovery if its interests are harmed.
            </p>
          </li>
          <li>
            <h5>Miscellaneous</h5>
            <p>
              Report commission errors within 7 days; do not claim governmental
              approval; handle your own taxes (1099 if $600+); you are an
              independent contractor; consider business insurance; sell/enroll
              only in authorized countries.
            </p>
          </li>
          <li>
            <h5>Rewards Buying</h5>
            <p>Prohibited; may result in legal action.</p>
          </li>
           <h3 className="terms-heading mt-5">Responsibilities of Affiliates
</h3>
<p>Keep your contact/tax info current; educate your team ethically; no disparagement; provide current documents to applicants; respect privacy; zero tolerance for harassment.</p>
       
       <h5 className="terms-heading mt-5">Sales Requirements
</h5>
<ol>
    <li>
        <h5>Product Sales</h5>
        <p> Rewards are based on bona fide sales to end users. Orders and payments must be placed through official GO AI systems; do not accept direct payments except approved “cash for virtual gift card” workflows; misrepresentation/redirection of client funds is grounds for termination and potential criminal referral.</p>
    </li>
    <li>
        <h5>No Territory Restrictions
</h5>
<p>No exclusive territories.
</p>
    </li>
    <li>
        
    </li>
</ol>
        </div>
      </section>
    </>
  );
}
