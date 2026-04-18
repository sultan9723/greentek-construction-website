export default function ContactCTASection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black dark:bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white dark:text-black mb-6">
            Ready to Build Something Great?
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-700 max-w-2xl mx-auto mb-10">
            Let's discuss your next construction project. Our team is ready to turn your vision into reality.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA */}
            <button className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white dark:bg-black text-black dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
              Schedule a Consultation
            </button>

            {/* Secondary CTA */}
            <button className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white dark:border-black text-white dark:text-black font-semibold hover:bg-white/10 dark:hover:bg-black/10 transition-colors">
              Get a Quote
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-700 dark:border-gray-300">
            <p className="text-gray-400 dark:text-gray-600 mb-4">Or reach out directly:</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-white dark:text-black">
              <a
                href="mailto:info@greentek.com"
                className="hover:text-gray-300 dark:hover:text-gray-700 transition-colors"
              >
                info@greentek.com
              </a>
              <span className="hidden sm:inline text-gray-600 dark:text-gray-400">•</span>
              <a
                href="tel:+1234567890"
                className="hover:text-gray-300 dark:hover:text-gray-700 transition-colors"
              >
                +1 (234) 567-8900
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
