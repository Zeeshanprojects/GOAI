import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Cookie() {
  useEffect(() => {
    document.title = "Cookie Policy | GO AI";
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
            <h1 className="title">Cookie Policy</h1>
            <p className="text-white">
              <span className="fw-bold">Last Updated: November 25, 2025</span>
            </p>
          </div>
          <h3 className="terms-heading mt-5">1. What this policy covers</h3>
          <p className="text-white"> 
            This Cookie Policy explains how we use cookies and similar
            technologies on goai.global and any sub-pages that link to it. It
            describes what these technologies are, why we use them, and how you
            can control them. For how we handle personal information more
            broadly, see our Privacy Policy
          </p>
          <h3 className="terms-heading mt-5">
            2. What are cookies and similar technologies?
          </h3>
          <ul>
            <li>
              <p className="text-white">
                Cookies are small text files placed on your device by a website
              </p>
            </li>
            <li>
              <p className="text-white">
                Web beacons/pixels, local storage, and SDKs are related
                technologies that help with measurement, preferences, and
                advertising.
              </p>
            </li>
          </ul>
          <h3 className="terms-heading mt-5">3. Why do we use them</h3>
          <p className="text-white">We use cookies for the following purposes:</p>
          <ol>
            <li>
              <p className="text-white">
                <strong>Strictly Necessary </strong>to provide core site
                functionality, security, and network management (e.g., session
                management, load balancing, fraud prevention). These cannot be
                switched off in our systems.
              </p>
            </li>
            <li>
              <p className="text-white">
                <strong>Performance & Analytics </strong>o understand site usage
                and improve user experience (e.g., page performance, error
                diagnostics, aggregated stats).
              </p>
            </li>
            <li>
              <p className="text-white">
                <strong>Functional</strong> to remember choices (e.g., language,
                saved preferences).
              </p>
            </li>
            <li>
              <p className="text-white">
                <strong>Advertising & Personalization</strong>to deliver and
                measure ads, limit repeats, and understand campaign performance,
                including cross-site or cross-app activity where applicable.
              </p>
            </li>
          </ol>
          <h3 className="terms-heading mt-5">4. Legal basis (EEA/UK visitors)</h3>
          <p className="text-white">
            For visitors in the EEA/UK, we place non-essential cookies
            (Performance, Functional, Advertising) only where you give consent
            via our cookie banner/preferences. Strictly Necessary cookies are
            used on the basis of our legitimate interest in delivering the
            service you request.
          </p>
          <h3 className="terms-heading mt-5">
            5. “Sale/Share” (California, CPRA)
          </h3>
          <p className="text-white">
            Some advertising and analytics cookies may constitute a “sale” or
            “sharing” of personal information for cross-context behavioral
            advertising. California residents can opt out at any time using the
            “Do Not Sell or Share My Personal Information” link or via Cookie
            Preferences (see Section 8).
          </p>
          <h3 className="terms-heading mt-5">6. Cookies we use (examples)</h3>
          <p className="text-white">
            Your exact list may vary over time; your Cookie Preferences panel
            will always show the current, authoritative list.
          </p>
          <ul>
            <li>
              <p className="text-white">Strictly Necessary</p>
            </li>
            <li>
              <p className="text-white">Performance & Analytics</p>
            </li>
            <li>
              <p className="text-white">Functional</p>
            </li>
            <li>
              <p className="text-white">Advertising & Personalization</p>
            </li>
          </ul>
          <p className="text-white">
            <strong>Note:</strong> Vendor names and cookie identifiers may
            change. Always check the live Cookie Preferences center for the
            current vendors, purposes, and lifetimes.
          </p>
          <h3 className="terms-heading mt-5">7. Cookie duration</h3>
          <ul>
            <li>
              <p>Session cookies expire when you close your browser.</p>
            </li>
            <li>
              <p className="text-white">
                Persistent cookies stay until they expire or you delete them.
                Retention periods are shown in the Cookie Preferences panel and
                may vary by vendor.
              </p>
            </li>
            <h3 className="terms-heading mt-5">
              8. How to manage your choices
            </h3>
            <ul>
              <li>
                Cookie banner / preferences: Use the “Cookie Preferences” link
                in our footer to accept, reject, or fine-tune categories (except
                Strictly Necessary).
              </li>
              <li>
                <p className="text-white">
                  Browser settings: Most browsers let you block or delete
                  cookies. Doing so may affect site functionality.
                </p>
              </li>
              <li>
                <p className="text-white">
                  Global Privacy Control (GPC): Where required, we endeavor to
                  honor browser-level GPC signals as an opt-out of sale/share
                  for California residents.
                </p>
              </li>
              <li>
                <p className="text-white">
                  Third-party opt-outs: Some providers offer their own opt-out
                  tools. See your Cookie Preferences panel for vendor-specific
                  links (when applicable).
                </p>
              </li>
              <li>
                <h5>9. Do Not Sell or Share (CA)</h5>
                <p className="text-white">
                  California residents can opt out of the “sale” or “sharing” of
                  personal information for advertising at any time via:
                </p>
                <ul>
                  <li>
                    <p className="text-white">
                      Do Not Sell or Share My Personal Information (footer
                      link), and/or
                    </p>
                  </li>
                  <li>
                    <p className="text-white">
                      Cookie Preferences (toggle off Advertising &
                      Personalization).
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
            <h3 className="terms-heading mt-5">10. Children</h3>
            <p className="text-white">
              Our services are not directed to children, and we do not knowingly
              place targeting cookies on users under the age required by
              applicable law.
            </p>
            <h3 className="terms-heading mt-5">11. Updates to this policy</h3>
            <p className="text-white">
              We may update this policy from time to time (for example, if we
              add or remove vendors or technologies). Changes will be posted
              here with a new “Effective date.” Material changes may also be
              highlighted in the banner or by other reasonable means.
            </p>
            <h3 className="terms-heading mt-5">12. How to contact us</h3>
            <p className="text-white"> Questions about this Cookie Policy?</p>
            <ul>
              <li>
                <p>Email: legal@goai.global (legal requests)</p>
              </li>
              <li>
                <p>Support: support@goai.global</p>
              </li>
            </ul>
          </ul>
        </div>
      </section>
    </>
  );
}
