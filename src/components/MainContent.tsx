import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function MainContent() {
  return (
    <section className="py-10 md:py-16 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-deep-navy mb-3 md:mb-4">
            GCC First Executive AI Cohort 2025-26
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
              Welcome to Afrisoft AI Consultants, a hub for AI excellence and
              human-centered innovation. We specialize in bridging the gap
              between cutting-edge artificial intelligence and real-world
              business transformation.
            </p>
          </div>
        </div>

        <Tabs defaultValue="executive" className="mb-10 md:mb-16">
          <div className="flex justify-center mb-4 md:mb-6 overflow-x-auto pb-2">
            <TabsList className="bg-pale-blue">
              <TabsTrigger value="executive" className="text-sm md:text-base">
                Executive Education
              </TabsTrigger>
              <TabsTrigger value="research" className="text-sm md:text-base">
                Research Consultancy
              </TabsTrigger>
              <TabsTrigger value="advisory" className="text-sm md:text-base">
                Advisory Services
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="executive">
            <Card className="border-powder-blue">
              <CardHeader>
                <CardTitle className="text-royal-blue">
                  Executive AI Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Afrisoft AI Executive Education delivers elite, outcome-driven
                  courses designed for today's leaders in the GCC. Conducted
                  directly in executive offices or premium venues, our programs
                  combine cutting-edge topics like Generative AI, Large Language
                  Models, Digital Twins, and AI Strategy with practical,
                  hands-on case studies tailored to regional industries.
                </p>
                <p className="mb-6">
                  Each session concludes with tangible outcomes: an AI roadmap,
                  ready-to-use toolkits, and executive certificates that
                  showcase innovation and leadership. With flexible formats
                  (half-day, 1-day, 2-day, and 5-day immersions), Afrisoft AI
                  ensures executives gain the strategic vision and tools to
                  implement AI immediately within their organizations.
                </p>
                <Button className="bg-royal-blue hover:bg-azure-blue">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="research">
            <Card className="border-powder-blue">
              <CardHeader>
                <CardTitle className="text-royal-blue">
                  AI-Powered Research Consultancy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  From executive education boot camps to AI-powered research
                  consultancy, we enable leaders and organizations to thrive in
                  the age of intelligent systems. Our research team helps
                  organizations identify the most promising AI applications for
                  their specific industry context and challenges.
                </p>
                <Button className="bg-royal-blue hover:bg-azure-blue">
                  Explore Services
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advisory">
            <Card className="border-powder-blue">
              <CardHeader>
                <CardTitle className="text-royal-blue">
                  Boardroom-Level Advisory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Afrisoft AI delivers boardroom-level advisory disguised as
                  training, giving your executives both knowledge and a
                  transformation plan. Our advisory services help leaders
                  navigate the complex AI landscape with confidence and
                  strategic clarity.
                </p>
                <Button className="bg-royal-blue hover:bg-azure-blue">
                  Request Consultation
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
          <Card className="border-powder-blue shadow-md transition-transform hover:scale-[1.02]">
            <CardHeader className="pb-2 md:pb-4">
              <CardTitle className="text-royal-blue text-lg md:text-xl">
                Cutting-Edge AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base">
                Gain access to the latest developments in artificial
                intelligence, including generative AI, large language models,
                and machine learning algorithms tailored for business
                applications.
              </p>
            </CardContent>
          </Card>

          <Card className="border-powder-blue shadow-md transition-transform hover:scale-[1.02]">
            <CardHeader className="pb-2 md:pb-4">
              <CardTitle className="text-royal-blue text-lg md:text-xl">
                Regional Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base">
                Our programs and consultancy services are specifically designed
                for the GCC region, addressing unique market conditions,
                regulatory environments, and cultural contexts.
              </p>
            </CardContent>
          </Card>

          <Card className="border-powder-blue shadow-md transition-transform hover:scale-[1.02]">
            <CardHeader className="pb-2 md:pb-4">
              <CardTitle className="text-royal-blue text-lg md:text-xl">
                Practical Outcomes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base">
                Every engagement delivers tangible results: strategic roadmaps,
                implementation toolkits, and actionable insights that drive real
                business transformation and competitive advantage.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-deep-navy mb-6">
            Ready to Transform Your Organization?
          </h2>
          <Button className="bg-royal-blue hover:bg-azure-blue">
            Contact Us Today
          </Button>
        </div>
      </div>
    </section>
  );
}
