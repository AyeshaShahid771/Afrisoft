"use client";

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-deep-navy mb-4">
            Why Choose Our Executive Education
          </h2>
          <div className="h-0.5 w-24 bg-royal-blue mx-auto mb-6"></div>
        </div>

        <div className="relative">
          <div className="absolute top-10 bottom-10 left-0 right-0 bg-gray-50 -z-10 transform -skew-y-3"></div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-16 py-6 md:py-16">
            <div className="bg-white p-4 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg md:text-2xl font-bold text-royal-blue mb-3 md:mb-4">
                Designed for Busy Professionals
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Our programs are structured for quick, impactful learning that
                respects your demanding schedule while delivering maximum value
                and applicable knowledge.
              </p>
            </div>

            <div className="bg-white p-4 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg md:text-2xl font-bold text-royal-blue mb-3 md:mb-4">
                Industry-Focused Curriculum
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                All courses are linked to Saudi Vision 2030 and GCC innovation
                strategies, ensuring relevance to regional priorities and
                development goals.
              </p>
            </div>

            <div className="bg-white p-4 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg md:text-2xl font-bold text-royal-blue mb-3 md:mb-4">
                Expert-Led Instruction
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Programs are led by PhD-level experts with international
                academic and industry experience, bringing diverse perspectives
                and cutting-edge knowledge.
              </p>
            </div>

            <div className="bg-white p-4 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg md:text-2xl font-bold text-royal-blue mb-3 md:mb-4">
                Recognized Certification
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Participants receive certificates that demonstrate AI readiness
                and leadership, enhancing professional credentials and
                organizational value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
