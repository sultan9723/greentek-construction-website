import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight mb-8">
            Privacy <span className="text-green-600">Policy.</span>
          </h1>
          
          <div className="prose prose-zinc prose-sm md:prose-base max-w-none text-zinc-600 space-y-8 font-medium">
            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-[11px]">1. Introduction</h2>
              <p>
                GreenTek Construction ("we", "our", or "us") is committed to protecting and respecting your privacy. 
                This policy sets out the basis on which any personal data we collect from you, or that you provide to us, 
                will be processed by us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-[11px]">2. Information We Collect</h2>
              <p>We may collect and process the following data about you:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Information you provide by filling in forms on our site, such as your name, email address, phone number, and project details.</li>
                <li>If you contact us, we may keep a record of that correspondence.</li>
                <li>Details of your visits to our site including, but not limited to, traffic data, location data, and other communication data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-[11px]">3. How We Use Your Information</h2>
              <p>We use information held about you in the following ways:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To provide you with information or services that you request from us (e.g., project quotes).</li>
                <li>To carry out our obligations arising from any contracts entered into between you and us.</li>
                <li>To notify you about changes to our service.</li>
                <li>To ensure that content from our site is presented in the most effective manner for you and for your computer.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-[11px]">4. Data Security</h2>
              <p>
                All information you provide to us is stored on secure servers. We use strict procedures and security features 
                to try to prevent unauthorised access. However, the transmission of information via the internet is not 
                completely secure; any transmission is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-[11px]">5. Disclosure of Your Information</h2>
              <p>
                We may disclose your personal information to third parties if we are under a duty to disclose or share your 
                personal data in order to comply with any legal obligation, or to protect the rights, property, or safety of 
                GreenTek Construction, our customers, or others.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-[11px]">6. Your Rights</h2>
              <p>
                You have the right to ask us not to process your personal data for marketing purposes. You can also 
                request access to the information we hold about you at any time by contacting us at {siteConfig.email}.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-[11px]">7. Contact</h2>
              <p>
                Questions, comments and requests regarding this privacy policy are welcomed and should be addressed to: 
                <br />
                <strong>{siteConfig.email}</strong> or by post to our registered office at {siteConfig.address.line1}, {siteConfig.address.city}, {siteConfig.address.postcode}.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
