export default function WhyPartner() {
  return (
    <section className="bg-[#f8fafc] py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-deep-navy mb-6">
          Why Partner With Us?
        </h2>
        <p className="text-gray-700 mb-6">
          By working with Afrisoft AI, clients gain access to cutting-edge
          academic research blended with practical consultancy. We provide
          evidence-based insights, tailored methodologies, and strategic
          guidance to ensure AI systems deliver not only performance but also
          positive human and societal outcomes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow">
            <h4 className="font-bold text-royal-blue mb-2">Academic Rigor</h4>
            <p className="text-sm text-gray-700">
              We ground our work in peer-reviewed research and validated
              methods.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <h4 className="font-bold text-royal-blue mb-2">
              Actionable Insights
            </h4>
            <p className="text-sm text-gray-700">
              Deliverables designed to be directly used by product, policy, and
              implementation teams.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <h4 className="font-bold text-royal-blue mb-2">
              Regional Experience
            </h4>
            <p className="text-sm text-gray-700">
              Local understanding of Dubai &amp; GCC regulatory and cultural
              contexts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
