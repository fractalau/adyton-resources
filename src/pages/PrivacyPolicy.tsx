import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => (
  <>
    <SEO
      title="Privacy Policy"
      description="How Adyton Resources collects, uses, and protects your personal information."
      canonical="https://adytonresources.com/privacy-policy"
    />
    <Header />
    <main className="bg-background">
      <article className="container max-w-3xl py-16 md:py-24">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-foreground/60 font-body mb-10">
          Last Updated: May 11, 2026
        </p>

        <div className="font-body text-foreground/80 leading-relaxed space-y-5 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-primary [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:marker:text-gold [&_strong]:text-foreground">
          <p>
            Adyton Resources ("we," "our," or "us") is committed to protecting the
            privacy and security of your personal information. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information
            when you visit our website, subscribe to our communications, or interact
            with our investor relations services.
          </p>
          <p>
            Please read this Privacy Policy carefully. By accessing or using our
            website, you agree to the practices described in this policy.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us,
            as well as non-personal information collected automatically when you
            interact with our website.
          </p>
          <ul>
            <li>
              <strong>Personal Information:</strong> This includes information that
              can be used to identify you personally, such as your name, email
              address, phone number, and company affiliation. This is typically
              collected when you fill out a contact form, subscribe to our mailing
              list (e.g., "Stay in the know"), or request investor materials.
            </li>
            <li>
              <strong>Usage Data and Analytics:</strong> When you visit our website,
              we automatically collect certain technical information. This may
              include your IP address, browser type, operating system, pages viewed,
              time spent on the site, and referring website addresses.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies, web
              beacons, and similar tracking technologies to enhance your user
              experience, analyze website traffic, and understand how visitors engage
              with our content.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect for various business and operational
            purposes, including:
          </p>
          <ul>
            <li>
              <strong>Communication:</strong> To respond to your inquiries, provide
              customer support, and fulfill requests for information regarding our
              exploration projects and corporate updates.
            </li>
            <li>
              <strong>Investor Relations:</strong> To send you newsletters, press
              releases, financial reports, and other investor-related communications
              (you may opt-out at any time).
            </li>
            <li>
              <strong>Website Optimization:</strong> To analyze trends, monitor site
              performance, and improve the design and functionality of our website.
            </li>
            <li>
              <strong>Legal Compliance:</strong> To comply with applicable legal
              obligations, regulatory requirements, and industry standards.
            </li>
          </ul>

          <h2>3. Disclosure of Your Information</h2>
          <p>
            Adyton Resources does not sell, rent, or trade your personal information
            to third parties. We may share your information only in the following
            circumstances:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> We may share data with trusted
              third-party vendors who assist us in operating our website, conducting
              our business, or managing communications (e.g., email marketing
              platforms, hosting providers). These parties are contractually
              obligated to keep your information confidential and secure.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your information
              if required to do so by law, court order, or governmental regulation,
              or if we believe in good faith that such disclosure is necessary to
              protect our rights, your safety, or the safety of others.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger,
              acquisition, reorganization, or sale of assets, your personal
              information may be transferred as part of the transaction.
            </li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement commercially reasonable technical, administrative, and
            physical security measures to protect your personal information from
            unauthorized access, use, alteration, or disclosure. However, please be
            aware that no method of transmission over the internet or electronic
            storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>5. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites (such as stock
            exchanges, regulatory bodies, or media outlets). We are not responsible
            for the privacy practices or content of these external sites. We
            encourage you to review the privacy policies of any third-party websites
            you visit.
          </p>

          <h2>6. Your Rights and Choices</h2>
          <p>
            Depending on your jurisdiction, you may have specific rights regarding
            your personal data:
          </p>
          <ul>
            <li>
              <strong>Opt-Out:</strong> You can unsubscribe from our marketing or
              investor communications at any time by clicking the "unsubscribe" link
              at the bottom of our emails or by contacting us directly.
            </li>
            <li>
              <strong>Access and Correction:</strong> You may request access to the
              personal information we hold about you and ask us to correct any
              inaccuracies.
            </li>
            <li>
              <strong>Cookies:</strong> Most web browsers allow you to control
              cookies through their settings. You can choose to disable cookies, but
              this may limit your ability to use certain features of our website.
            </li>
          </ul>

          <h2>7. Changes to This Privacy Policy</h2>
          <p>
            We reserve the right to update or modify this Privacy Policy at any time
            to reflect changes in our practices or legal requirements. Any updates
            will be posted on this page with a revised "Last Updated" date. We
            encourage you to review this policy periodically.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy
            Policy or our data practices, please contact us at:
          </p>
          <address className="not-italic">
            <strong>Adyton Resources</strong>
            <br />
            Email:{" "}
            <a href="mailto:info@adytonresources.com" className="text-primary hover:underline">
              info@adytonresources.com
            </a>
            <br />
            Phone: +61 7 3854 2389
            <br />
            Address: PO Box 5807, Brisbane QLD 4000, Australia
          </address>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default PrivacyPolicy;
