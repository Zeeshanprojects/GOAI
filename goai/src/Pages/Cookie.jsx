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
          <h3 className="terms-heading mt-5">What this policy covers</h3>
          <p>
            This Cookie Policy explains how we use cookies and similar
            technologies on goai.global and any sub-pages that link to it. It
            describes what these technologies are, why we use them, and how you
            can control them. For how we handle personal information more
            broadly, see our Privacy Policy
          </p>
          <h3 className="terms-heading mt-5">
            What are cookies and similar technologies?
          </h3>
          <ul>
            <li>
              <p>
                Cookies are small text files placed on your device by a website
              </p>
            </li>
            <li>
              <p>
                Web beacons/pixels, local storage, and SDKs are related
                technologies that help with measurement, preferences, and
                advertising.
              </p>
            </li>
          </ul>
          <h3 className="terms-heading mt-5"> Why do we use them</h3>
          <p>We use cookies for the following purposes:</p>
          <ol>
            <li>
              <p>
                <strong>Strictly Necessary </strong>to provide core site
                functionality, security, and network management (e.g., session
                management, load balancing, fraud prevention). These cannot be
                switched off in our systems.
              </p>
            </li>
            <li>
              <p>
                <strong>Performance & Analytics </strong>o understand site usage
                and improve user experience (e.g., page performance, error
                diagnostics, aggregated stats).
              </p>
            </li>
            <li>
              <p>
                <strong>Functional</strong> to remember choices (e.g., language,
                saved preferences).
              </p>
            </li>
            <li>
              <p>
                <strong>Advertising & Personalization</strong>to deliver and
                measure ads, limit repeats, and understand campaign performance,
                including cross-site or cross-app activity where applicable.
              </p>
            </li>
          </ol>
             <h3 className="terms-heading mt-5"> Legal basis (EEA/UK visitors)
</h3>
<p>For visitors in the EEA/UK, we place non-essential cookies (Performance, Functional, Advertising) only where you give consent via our cookie banner/preferences. Strictly Necessary cookies are used on the basis of our legitimate interest in delivering the service you request.
</p>
             <h3 className="terms-heading mt-5">“Sale/Share” (California, CPRA)
</h3>
<p>Some advertising and analytics cookies may constitute a “sale” or “sharing” of personal information for cross-context behavioral advertising. California residents can opt out at any time using the “Do Not Sell or Share My Personal Information” link or via Cookie Preferences (see Section 8).
</p>
<h3 className="terms-heading mt-5">Cookies we use (examples)

</h3>
<p>Your exact list may vary over time; your Cookie Preferences panel will always show the current, authoritative list.</p>
<ul>
    <li>
        <p>Strictly Necessary</p>
                    
    </li>
    <li><p>Performance & Analytics</p></li>
    <li><p>Functional</p></li>
    <li><p>Advertising & Personalization
</p></li>

</ul>
<p><strong>Note:</strong> Vendor names and cookie identifiers may change. Always check the live Cookie Preferences center for the current vendors, purposes, and lifetimes.
</p>
<h3 className="terms-heading mt-5">Cookie duration


</h3>
        </div>
      </section>
    </>
  );
}
