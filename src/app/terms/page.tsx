import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight mb-8">
            Terms of <span className="text-green-600">Service.</span>
          </h1>
          
          <div className="prose prose-zinc prose-sm md:prose-base max-w-none text-zinc-600 space-y-8 font-medium">
            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-[11px]">1. Acceptance of Terms</h2>
              <p>
                By accessing or using this website, you agree to be bound by these Terms of Service and all applicable 
                laws and regulations. If you do not agree with any of these terms, you are prohibited from using or 
                accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-[11px]">2. Services Provided</h2>
              <p>
                GreenTek Construction provides multi-disciplinary construction and energy solutions, including but 
                not limited to solar PV installation, heat pump setup, insulation solutions, and general construction 
                projects. We reserve the right to modify or discontinue services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-[11px]">3. Quotations and Estimates</h2>
              <p>
                All quotations and estimates provided through this website or via email are subject to formal site 
                survey and final contract. We are not bound by any estimate until a formal agreement is signed by 
                both parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-[11px]">4. User Obligations</h2>
              <p>You agree to provide accurate, current, and complete information when filling out contact forms or project enquiries.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>You will not use the website for any unlawful purpose.</li>
                <li>You will not attempt to gain unauthorized access to our systems.</li>
                <li>You will not use the site to transmit any harmful code or malware.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-[11px]">5. Intellectual Property</h2>
              <p>
                The materials contained in this website are protected by applicable copyright and trademark law. 
                Unless otherwise stated, GreenTek Construction owns the intellectual property rights for all 
                material on this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-[11px]">6. Limitation of Liability</h2>
              <p>
                GreenTek Construction shall not be held liable for any damages that will arise with the use or 
                inability to use the materials on this website, even if we have been notified orally or in writing 
                of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-[11px]">7. Governing Law</h2>
              <p>
                Any claim related to GreenTek Construction's website shall be governed by the laws of England & Wales 
                without regards to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-[11px]">8. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at <strong>{siteConfig.email}</strong>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
