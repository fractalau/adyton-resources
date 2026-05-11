import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

const Disclaimer = () => (
  <>
    <SEO
      title="Legal Disclaimer"
      description="Legal disclaimer for the Adyton Resources website, including forward-looking statements and technical information notices."
      canonical="https://adytonresources.com/disclaimer"
    />
    <Header />
    <main className="bg-white">
      <article className="container max-w-3xl py-16 md:py-24">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
          Legal Disclaimer
        </h1>
        <p className="text-sm text-foreground/60 font-body mb-10">
          Last Updated: May 11, 2026
        </p>

        <div className="font-body text-neutral-900 leading-relaxed space-y-5 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-primary [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:marker:text-gold [&_strong]:text-neutral-900">
          <p>
            Please read the following disclaimer carefully before using this
            website. By accessing the Adyton Resources ("Adyton," the "Company,"
            "we," or "us") website, you agree to be bound by the terms and
            conditions outlined below.
          </p>

          <h2>1. No Investment Advice</h2>
          <p>
            The information contained on this website is for general informational
            purposes only and does not constitute financial, investment, legal, or
            tax advice. Nothing on this website should be construed as an offer to
            sell, or a solicitation of an offer to buy, any securities of Adyton
            Resources in any jurisdiction.
          </p>
          <p>
            Investors should not rely on the information provided on this website
            for making investment decisions. We strongly recommend that you seek
            independent professional advice and conduct your own due diligence
            before making any investment in the Company.
          </p>

          <h2>2. Forward-Looking Statements</h2>
          <p>
            Certain statements and information contained on this website
            constitute "forward-looking statements" or "forward-looking
            information" within the meaning of applicable securities legislation.
            These statements involve known and unknown risks, uncertainties, and
            other factors that may cause the actual results, performance, or
            achievements of Adyton Resources to be materially different from any
            future results expressed or implied by such statements.
          </p>
          <ul>
            <li>
              <strong>Identifying Forward-Looking Statements:</strong> These
              statements can generally be identified by the use of words such as
              "expects," "anticipates," "believes," "intends," "estimates,"
              "potential," "possible," "projects," "plans," and similar
              expressions, or statements that events, conditions, or results
              "will," "may," "could," or "should" occur or be achieved.
            </li>
            <li>
              <strong>Scope of Statements:</strong> Forward-looking statements on
              this site may relate to our future financial or operating
              performance, the timing and outcome of exploration programs,
              mineral resource estimates, potential expansion of projects,
              environmental and regulatory approvals, and general market
              conditions.
            </li>
            <li>
              <strong>Risks and Uncertainties:</strong> These statements are based
              on reasonable assumptions made by management at the time they are
              made, but are subject to significant risks. These risks include,
              but are not limited to: fluctuating metal prices, the speculative
              nature of mineral exploration, delays in obtaining permits,
              geological and technical challenges, and changes in local
              government regulations in Papua New Guinea.
            </li>
          </ul>
          <p>
            The Company disclaims any obligation to update or revise any
            forward-looking statements, whether as a result of new information,
            future events, or otherwise, except as required by law.
          </p>

          <h2>3. Technical and Scientific Information</h2>
          <p>
            All technical and scientific information contained on this website,
            including details regarding mineral resource estimates, drill hole
            intercepts, and exploration potential, is provided for informational
            purposes. While we strive to ensure that all data is accurate and up
            to date, exploration is an inherently imprecise science.
          </p>
          <p>
            Any references to historical estimates or third-party data have not
            necessarily been verified by a "Qualified Person" or "Competent
            Person" (as defined by relevant regulatory bodies such as JORC or NI
            43-101) acting on behalf of Adyton Resources, unless explicitly
            stated otherwise. Readers should refer to our official public filings
            and technical reports for definitive and compliant geological data.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            Adyton Resources, its directors, officers, employees, and agents will
            not be liable for any direct, indirect, incidental, special,
            consequential, or punitive damages arising out of or in connection
            with your access to, use of, or inability to use this website. This
            includes any reliance you place on the information provided, as well
            as any errors, omissions, or delays in the content.
          </p>

          <h2>5. Third-Party Links</h2>
          <p>
            This website may contain links to external, third-party websites that
            are not operated or controlled by Adyton Resources. We provide these
            links for your convenience only. We do not endorse or assume any
            responsibility for the accuracy, content, or privacy practices of
            these external sites. Accessing any third-party links is done
            entirely at your own risk.
          </p>

          <h2>6. Accuracy of Information</h2>
          <p>
            While we make every effort to keep the information on this website
            accurate and current, Adyton Resources assumes no responsibility for
            any errors or omissions in the content. We reserve the right to
            modify, update, or remove information on this site at any time
            without prior notice.
          </p>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default Disclaimer;
