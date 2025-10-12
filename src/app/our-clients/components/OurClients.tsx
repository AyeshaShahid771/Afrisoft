"use client";

export default function OurClients() {
  return (
    <section aria-labelledby="our-clients" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-7">
          <div className="bg-gradient-to-r from-white via-royal-blue/5 to-white p-6 rounded-2xl">
            <h1
              id="our-clients"
              className="text-3xl md:text-5xl font-extrabold text-deep-navy"
            >
              Our Clients
            </h1>
            <p className="mt-4 text-sm md:text-lg text-gray-700 max-w-3xl">
              Afrisoft AI Consultants is proud to work with a wide range of
              clients who share our commitment to innovation, growth, and
              digital transformation. We focus on building long-term
              partnerships that create real impact.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-deep-navy">
              Who We Work With
            </h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-royal-blue mt-2" />
                <div>
                  <div className="font-semibold text-deep-navy">
                    Corporations
                  </div>
                  <div className="text-sm text-gray-700">
                    Businesses looking to adopt AI for efficiency, customer
                    engagement, and market growth.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-royal-blue mt-2" />
                <div>
                  <div className="font-semibold text-deep-navy">
                    Government Agencies
                  </div>
                  <div className="text-sm text-gray-700">
                    Public sector organizations driving smart governance and
                    AI-led transformation.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-royal-blue mt-2" />
                <div>
                  <div className="font-semibold text-deep-navy">
                    Universities and Research Centers
                  </div>
                  <div className="text-sm text-gray-700">
                    Academic institutions seeking collaboration in AI research,
                    training, and innovation.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-royal-blue mt-2" />
                <div>
                  <div className="font-semibold text-deep-navy">
                    Startups and Entrepreneurs
                  </div>
                  <div className="text-sm text-gray-700">
                    Emerging businesses that need AI-driven strategies to scale
                    and compete.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-deep-navy">
              Our Approach
            </h3>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              We don’t just deliver training or consultancy — we work closely
              with our clients to understand their unique needs and design
              solutions that fit their vision. Every client is treated as a
              partner in building the future of AI in the GCC and beyond.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-deep-navy">
              Why Clients Choose Us
            </h3>
            <div className="mt-3 grid grid-cols-1 gap-3">
              <div className="flex items-start gap-3">
                <div className="text-royal-blue mt-1">✓</div>
                <div className="text-sm text-gray-700">
                  Deep understanding of AI transformation in the GCC market.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-royal-blue mt-1">✓</div>
                <div className="text-sm text-gray-700">
                  Customized solutions aligned with Saudi Vision 2030 and
                  regional innovation strategies.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-royal-blue mt-1">✓</div>
                <div className="text-sm text-gray-700">
                  Access to a network of AI experts, researchers, and industry
                  professionals.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-royal-blue mt-1">✓</div>
                <div className="text-sm text-gray-700">
                  Proven experience in executive education, consultancy, and
                  research-driven innovation.
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-700">
              Our Speakers and Trainers have taught professionals from various
              backgrounds.
            </p>
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col gap-6 order-first md:order-none">
          <div>
            <img src="/image1.jpeg" alt="Image 1" />
          </div>

          {/* Trusted partners box removed as requested */}
        </div>
      </div>
    </section>
  );
}
