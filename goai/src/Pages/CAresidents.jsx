import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function CAresidents() {
  useEffect(() => {
    document.title = "California Residents | GO AI";
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
            <h1 className="title">My Personal Information (California)</h1>
            <p className="text-white">
              <span className="fw-bold">Last Updated: November 28, 2025</span>
            </p>
            <div className="terms-content text-white">
              <p>
                GO AI, LLC respects your privacy choices. If you are a
                California resident, you have the right to direct us to stop
                “selling” or “sharing” your personal information as those terms
                are defined by the California Consumer Privacy Act (CCPA), as
                amended by the CPRA. “Share” includes using personal information
                for cross-context behavioral advertising (sometimes called
                interest-based or targeted ads). This page explains what those
                rights mean and how to use them.
              </p>
              <h3 className="terms-heading-mt-5">
                What counts as a “sale” or “share” here?
              </h3>
              <p>
                Under California law, a “sale” can include letting advertising
                or analytics partners collect data (via cookies, pixels, SDKs,
                or similar tools) about your activity on our sites/services to
                help deliver ads or measure performance. “Share” specifically
                covers cross-context behavioral advertising—showing you ads
                based on information collected across different websites, apps,
                or services. We do not sell your personal information for money,
                but we may allow third-party partners to collect certain data
                for advertising/analytics—this may be considered a “sale” or
                “share” under California law.
              </p>

              <h3 className="terms-heading-mt-5">
                Your choices (how to opt out)
              </h3>
              <p>
                You can tell us “Do Not Sell or Share” using any of the
                following:
              </p>
              <ul>
                <li>
                  <h5>Your Privacy Choices link (recommended)</h5>
                  <p>
                    {" "}
                    Use the “Your Privacy Choices” / “Do Not Sell or Share” link
                    in our site footer. From there, you can set your opt-out
                    preferences for this browser.
                  </p>
                </li>
                <li>
                  <h5>Cookie Settings</h5>
                  <p>
                    {" "}
                    Open Cookie Settings in the site footer to turn off
                    advertising/targeting and non-essential analytics cookies
                  </p>
                </li>
                <li>
                  <h5>Global Privacy Control (GPC)</h5>
                  <p>
                    {" "}
                    If your browser or extension sends a GPC signal, we treat it
                    as a valid request to opt out of sale/share for that
                    browser. You can learn more by searching for “Global Privacy
                    Control” in your browser’s extension store. Note: you’ll
                    need to enable GPC on each browser/device you use.
                  </p>
                </li>
                <li>
                  <h5>By email or phone</h5>
                  <p>
                    {" "}
                    Contact us with the subject “Do Not Sell or Share My
                    Personal Information” and include the email address(es)
                    and/or account you use with us:
                  </p>
                  <ul>
                    <li>
                      <p>Email: legal@goai.global or support@goai.global</p>
                    </li>
                    <li>
                      <p>Phone: (770) 847-GOAI (4264)</p>
                    </li>
                  </ul>
                </li>
                <p>
                  Important: Some opt-out methods (like Cookie Settings or GPC)
                  work per browser and device. If you use multiple
                  browsers/devices, repeat your choices on each one. Clearing
                  cookies can remove your preferences—if that happens, just set
                  them again.
                </p>
              </ul>
              <h3 className="terms-heading mt-5">
                Right to limit the use and disclosure of Sensitive Personal
                Information
              </h3>
              <p>
                If we collect Sensitive Personal Information (as defined by
                California law), we will use it only for permitted, necessary
                purposes (e.g., service delivery, security, compliance) unless
                we request your consent for additional uses. If we ever use it
                beyond those limited purposes, you will have the right to limit
                such use/disclosure. You can submit that request via the same
                methods above.
              </p>
            </div>
            <h3 className="terms-heading mt-5">
              Categories of personal information involved
            </h3>
            <p>
              Depending on how you interact with us, the following categories
              may be subject to “sale” or “share” (primarily via cookies/SDKs):
            </p>
            <ul>
              <li>
                <p>Identifiers (e.g., device identifiers, cookie IDs)</p>
              </li>
              <li>
                <p>
                  Internet or other electronic network activity (e.g., page
                  views, clicks, referral URLs, approximate location from IP,
                  device/browser metadata)
                </p>
              </li>
              <li>
                <p>
                  Inferences derived from the above to create advertising or
                  content profiles
                </p>
              </li>
              <p>
                We make these categories available to advertising networks,
                analytics providers, social networks, and similar partners for
                ad delivery, measurement, and optimization.
              </p>
            </ul>
            <h3 className="terms-heading mt-5">How we process your request</h3>
            <ul>
              <li>
                <p>
                  Timing: We will process opt-out requests as soon as reasonably
                  possible and within the timelines required by California law.
                </p>
              </li>
              <li>
                <p>
                  Scope: Your “Do Not Sell or Share” choice applies to future
                  collection and disclosure.
                </p>
              </li>
              <li>
                <p>
                  Verification: For requests sent by email/phone, we may take
                  reasonable steps to verify your identity (for example,
                  confirming control of the email address associated with your
                  account or records).
                </p>
              </li>
              <li>
                <p>
                  Authorized agents: You may use an authorized agent to submit a
                  request on your behalf. We may require proof of the agent’s
                  authorization and may ask you to verify your identity
                  directly.
                </p>
              </li>
            </ul>
            <h3 className="terms-heading mt-5">Non-discrimination</h3>
            <p>
              Exercising your privacy rights will not result in us unlawfully
              discriminating against you. However, some site features that rely
              on advertising or personalization partners may be limited if you
              opt out.
            </p>
            <h3 className="terms-heading mt-5">Minors under 16</h3>
            <p>
              We do not knowingly “sell” or “share” the personal information of
              consumers we know are under 16 years old. If you are a parent or
              guardian and believe your child provided personal information to
              us, contact us using the information below.
            </p>
            <h3 className="terms-heading mt-5">More information</h3>
            <p>
              For details about the information we collect, how we use it, and
              your California privacy rights (including right to know/access,
              correction, deletion, appeal, and data retention), please see our
              Privacy Policy (linked in the footer).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
